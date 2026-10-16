import { User, UserAccountType } from '../user';
import { IUserEditDto } from '../api/user';
import { Conversation, ConversationStatus } from '../conversation';
import { File, FILE_PARENT_DIRECTORY_ID, FileType } from '../file';
import { Agent, AgentGraph, AgentGraphRun, AgentGraphRunStatus } from '../agent';
import { McpServer } from '../mcp';
import { Group, GroupMember, GroupMemberRole } from '../group';
import { FileUtil } from './FileUtil';
import * as _ from 'lodash';

export class PermissionUtil {
    //--------------------------------------------------------------------------
    //
    // 	User Methods
    //
    //--------------------------------------------------------------------------

    public static userIsCanEdit(item: User, user: User, params?: IUserEditDto): boolean {
        if (_.isNil(user)) {
            return false;
        }
        if (PermissionUtil.userIsAdministrator(user)) {
            return true;
        }
        if (!_.isNil(params) && (!_.isNil(params.account) || !_.isNil(params.status))) {
            return false;
        }
        return item.id === user.id;
    }

    public static userIsAdministrator(item: User): boolean {
        return !_.isNil(item) ? item.account.type === UserAccountType.ADMINISTRATOR : false;
    }

    public static userIsCanCoinAccountsGet(item: User, user: User): boolean {
        if (_.isNil(user)) {
            return false;
        }
        if (PermissionUtil.userIsAdministrator(user)) {
            return true;
        }
        return item.id === user.id;
    }

    //--------------------------------------------------------------------------
    //
    // 	Conversation Methods
    //
    //--------------------------------------------------------------------------

    public static conversationIsCanOpen(item: Conversation, user: User): boolean {
        if (_.isNil(user)) {
            return false;
        }
        if (PermissionUtil.userIsAdministrator(user)) {
            return true;
        }
        return item.userId === user.id;
    }

    public static conversationIsCanCheck(item: Conversation, user: User): boolean {
        if (!PermissionUtil.conversationIsCanOpen(item, user)) {
            return false;
        }
        switch (item.status) {
            case ConversationStatus.ERROR:
                return true;
            default:
                return false;
        }
    }

    public static conversationIsCanEdit(item: Conversation, user: User): boolean {
        return PermissionUtil.conversationIsCanOpen(item, user);
    }

    public static conversationIsCanExport(item: Conversation, user: User): boolean {
        return PermissionUtil.conversationIsCanOpen(item, user) && !_.isEmpty(item.messages);
    }

    public static conversationIsCanCommand(item: Conversation, user: User): boolean {
        return PermissionUtil.conversationIsCanOpen(item, user);
    }

    public static conversationIsCanClear(item: Conversation, user: User): boolean {
        return PermissionUtil.conversationIsCanMessageRemove(item, user);
    }

    public static conversationIsCanCancel(item: Conversation, user: User): boolean {
        if (!PermissionUtil.conversationIsCanOpen(item, user)) {
            return false;
        }
        switch (item.status) {
            case ConversationStatus.LOADING:
                return true;
            default:
                return false;
        }
    }

    public static conversationIsCanRemove(item: Conversation, user: User): boolean {
        return PermissionUtil.conversationIsCanOpen(item, user);
    }

    public static conversationIsCanMessageAdd(item: Conversation, user: User): boolean {
        if (!PermissionUtil.conversationIsCanOpen(item, user)) {
            return false;
        }
        return !PermissionUtil.conversationIsCanCheck(item, user);
    }

    public static conversationIsCanMessageRemove(item: Conversation, user: User): boolean {
        if (!PermissionUtil.conversationIsCanOpen(item, user)) {
            return false;
        }
        return true;
    }

    //--------------------------------------------------------------------------
    //
    // 	File Methods
    //
    //--------------------------------------------------------------------------

    public static fileIsCanOpen(item: File, user: User): boolean {
        if (_.isNil(user) || item.id === FILE_PARENT_DIRECTORY_ID) {
            return false;
        }
        if (PermissionUtil.userIsAdministrator(user)) {
            return true;
        }
        return item.userId === user.id;
    }

    public static fileIsCanEdit(item: File, user: User): boolean {
        return PermissionUtil.fileIsCanOpen(item, user);
    }

    public static fileIsCanMove(item: File, user: User): boolean {
        return PermissionUtil.fileIsCanOpen(item, user);
    }

    public static fileIsCanRemove(item: File, user: User): boolean {
        return PermissionUtil.fileIsCanOpen(item, user);
    }

    public static fileIsCanContentVectorAdd(item: File, user: User): boolean {
        return _.isNil(item.vectorId) && PermissionUtil.fileIsCanOpen(item, user) && FileUtil.isCanContentVectorize(item.mime);
    }

    /** Просмотр нарезки показывает текст файла, поэтому только тому, кто может файл открыть */
    public static fileIsCanContentVectorSplit(item: File, user: User): boolean {
        return PermissionUtil.fileIsCanOpen(item, user) && FileUtil.isTextDocument(item.mime);
    }

    public static fileIsCanContentVectorGet(item: File, user: User): boolean {
        return FileUtil.isContentVectorized(item) && PermissionUtil.fileIsCanOpen(item, user);
    }

    public static fileIsCanContentVectorRemove(item: File, user: User): boolean {
        return FileUtil.isContentVectorized(item) && PermissionUtil.fileIsCanOpen(item, user);
    }

    public static fileIsCanContentAnonymize(item: File, user: User): boolean {
        return PermissionUtil.fileIsCanOpen(item, user) && FileUtil.isCanContentAnonymize(item.mime);
    }

    public static fileIsCanConvertSoundExtract(item: File, user: User): boolean {
        return PermissionUtil.fileIsCanOpen(item, user) && item.type === FileType.VIDEO;
    }

    public static fileIsCanLinkAdd(item: File, user: User): boolean {
        return PermissionUtil.fileIsCanOpen(item, user) && item.type !== FileType.LINK && item.type !== FileType.DIRECTORY;
    }

    //--------------------------------------------------------------------------
    //
    // 	Mcp Server Methods
    //
    //--------------------------------------------------------------------------

    public static mcpServerIsCanOpen(item: McpServer, user: User): boolean {
        if (_.isNil(user)) {
            return false;
        }
        if (PermissionUtil.userIsAdministrator(user)) {
            return true;
        }
        // the built in servers have no owner and are available to everyone
        return _.isNil(item.userId) || item.userId === user.id;
    }

    // серверами управляют только администраторы, их серверы общие для всех
    public static mcpServerIsCanAdd(user: User): boolean {
        return PermissionUtil.userIsAdministrator(user);
    }

    public static mcpServerIsCanEdit(item: McpServer, user: User): boolean {
        return PermissionUtil.userIsAdministrator(user);
    }

    public static mcpServerIsCanRemove(item: McpServer, user: User): boolean {
        return PermissionUtil.mcpServerIsCanEdit(item, user);
    }

    //--------------------------------------------------------------------------
    //
    // 	Agent Methods
    //
    //--------------------------------------------------------------------------

    public static agentIsCanOpen(item: Agent, user: User): boolean {
        if (_.isNil(user)) {
            return false;
        }
        if (PermissionUtil.userIsAdministrator(user)) {
            return true;
        }
        return item.userId === user.id;
    }

    public static agentIsCanEdit(item: Agent, user: User): boolean {
        return PermissionUtil.agentIsCanOpen(item, user);
    }

    public static agentIsCanRemove(item: Agent, user: User): boolean {
        return PermissionUtil.agentIsCanOpen(item, user);
    }

    //--------------------------------------------------------------------------
    //
    // 	Agent Graph Methods
    //
    //--------------------------------------------------------------------------

    public static agentGraphIsCanOpen(item: AgentGraph, user: User): boolean {
        if (_.isNil(user)) {
            return false;
        }
        if (PermissionUtil.userIsAdministrator(user)) {
            return true;
        }
        return item.userId === user.id;
    }

    public static agentGraphIsCanEdit(item: AgentGraph, user: User): boolean {
        return PermissionUtil.agentGraphIsCanOpen(item, user);
    }

    public static agentGraphIsCanRemove(item: AgentGraph, user: User): boolean {
        return PermissionUtil.agentGraphIsCanOpen(item, user);
    }

    public static agentGraphIsCanRun(item: AgentGraph, user: User): boolean {
        if (!PermissionUtil.agentGraphIsCanOpen(item, user)) {
            return false;
        }
        return !_.isEmpty(item.nodes);
    }

    public static agentGraphRunIsCanOpen(item: AgentGraphRun, user: User): boolean {
        if (_.isNil(user)) {
            return false;
        }
        if (PermissionUtil.userIsAdministrator(user)) {
            return true;
        }
        return item.userId === user.id;
    }

    public static agentGraphRunIsCanResume(item: AgentGraphRun, user: User): boolean {
        if (!PermissionUtil.agentGraphRunIsCanOpen(item, user)) {
            return false;
        }
        return item.status === AgentGraphRunStatus.AWAITING;
    }

    public static agentGraphRunIsCanCancel(item: AgentGraphRun, user: User): boolean {
        if (!PermissionUtil.agentGraphRunIsCanOpen(item, user)) {
            return false;
        }
        return item.status === AgentGraphRunStatus.IN_PROGRESS || item.status === AgentGraphRunStatus.AWAITING;
    }

    /** A run that is still going is cancelled, not removed: its task lives in the memory of the process */
    public static agentGraphRunIsCanRemove(item: AgentGraphRun, user: User): boolean {
        if (!PermissionUtil.agentGraphRunIsCanOpen(item, user)) {
            return false;
        }
        return item.status !== AgentGraphRunStatus.IN_PROGRESS;
    }

    //--------------------------------------------------------------------------
    //
    // 	Group Methods
    //
    //--------------------------------------------------------------------------

    /** Член группы — владелец или любой участник; `members` передаётся отдельно, т.к. в Group их нет */
    public static groupIsMember(item: Group, user: User, members?: Array<GroupMember>): boolean {
        if (_.isNil(user) || _.isNil(item)) {
            return false;
        }
        if (item.ownerId === user.id) {
            return true;
        }
        return !_.isNil(members) ? members.some(member => member.userId === user.id) : false;
    }

    /** Администратор группы: владелец-создатель либо участник с ролью ADMIN */
    public static groupIsAdministrator(item: Group, user: User, members?: Array<GroupMember>): boolean {
        if (_.isNil(user) || _.isNil(item)) {
            return false;
        }
        if (item.ownerId === user.id) {
            return true;
        }
        return !_.isNil(members) ? members.some(member => member.userId === user.id && member.role === GroupMemberRole.ADMIN) : false;
    }

    /** Управлять группой (бюджет, участники, лимиты) — администратор группы или администратор инстанса */
    public static groupIsCanManage(item: Group, user: User, members?: Array<GroupMember>): boolean {
        if (PermissionUtil.userIsAdministrator(user)) {
            return true;
        }
        return PermissionUtil.groupIsAdministrator(item, user, members);
    }

    /** Открыть группу (видеть остаток, своё членство) — любой участник или администратор инстанса */
    public static groupIsCanOpen(item: Group, user: User, members?: Array<GroupMember>): boolean {
        if (PermissionUtil.userIsAdministrator(user)) {
            return true;
        }
        return PermissionUtil.groupIsMember(item, user, members);
    }

    /** Тратить бюджет группы — любой участник группы */
    public static groupIsCanSpend(item: Group, user: User, members?: Array<GroupMember>): boolean {
        return PermissionUtil.groupIsMember(item, user, members);
    }

    /** Удалить группу — только владелец-создатель или администратор инстанса (не ADMIN-участник) */
    public static groupIsCanRemove(item: Group, user: User): boolean {
        if (_.isNil(user) || _.isNil(item)) {
            return false;
        }
        return item.ownerId === user.id || PermissionUtil.userIsAdministrator(user);
    }
}
