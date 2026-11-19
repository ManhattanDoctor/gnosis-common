import { User } from '../user';
import { IUserEditDto } from '../api/user';
import { Conversation, ConversationStatus } from '../conversation';
import { File, FILE_PARENT_DIRECTORY_ID, FileType } from '../file';
import { Agent, AgentGraph, AgentGraphRun, AgentGraphRunStatus } from '../agent';
import { McpServer } from '../mcp';
import { UserToken } from '../user';
import { Group, GroupMember, GroupMemberRole } from '../group';
import { FileUtil } from './FileUtil';
import * as _ from 'lodash';

export class PermissionUtil {
    //--------------------------------------------------------------------------
    //
    // 	User Methods
    //
    //--------------------------------------------------------------------------

    /** Доступ владельца без дополнительных permissions. Бизнес-ограничения проверяются отдельно. */
    public static userIsCanEditOwn(item: User, user: User, params?: IUserEditDto): boolean {
        return !_.isNil(user)
            && item.id === user.id
            && _.isNil(params?.status)
            && _.isNil(params?.account);
    }

    public static userIsCanCoinAccountsGetOwn(item: User, user: User): boolean {
        return !_.isNil(user) && item.id === user.id;
    }

    //--------------------------------------------------------------------------
    //
    // 	Conversation Methods
    //
    //--------------------------------------------------------------------------

    public static conversationIsCanOpenOwn(item: Conversation, user: User): boolean {
        return !_.isNil(user) && item.userId === user.id;
    }

    public static conversationIsCanEditOwn(item: Conversation, user: User): boolean {
        return PermissionUtil.conversationIsCanOpenOwn(item, user);
    }

    public static conversationIsCanRemoveOwn(item: Conversation, user: User): boolean {
        return PermissionUtil.conversationIsCanOpenOwn(item, user);
    }

    public static conversationIsCanCommandOwn(item: Conversation, user: User): boolean {
        return PermissionUtil.conversationIsCanOpenOwn(item, user);
    }

    public static conversationIsCanClearOwn(item: Conversation, user: User): boolean {
        return PermissionUtil.conversationIsCanOpenOwn(item, user);
    }

    public static conversationIsCanMessageRemoveOwn(item: Conversation, user: User): boolean {
        return PermissionUtil.conversationIsCanOpenOwn(item, user);
    }

    public static conversationIsCanCheck(item: Conversation): boolean {
        return item.status === ConversationStatus.ERROR;
    }

    public static conversationIsCanCancel(item: Conversation): boolean {
        return item.status === ConversationStatus.LOADING;
    }

    public static conversationIsCanMessageAdd(item: Conversation): boolean {
        return item.status === ConversationStatus.LOADED || item.status === ConversationStatus.ERROR;
    }

    public static conversationIsCanExport(item: Conversation): boolean {
        return !_.isEmpty(item.messages);
    }

    //--------------------------------------------------------------------------
    //
    // 	File Methods
    //
    //--------------------------------------------------------------------------

    public static fileIsCanOpen(item: File): boolean {
        return item.id !== FILE_PARENT_DIRECTORY_ID;
    }

    public static fileIsCanOpenOwn(item: File, user: User): boolean {
        return !_.isNil(user) && item.userId === user.id;
    }

    public static fileIsCanEditOwn(item: File, user: User): boolean {
        return PermissionUtil.fileIsCanOpenOwn(item, user);
    }

    public static fileIsCanMoveOwn(item: File, user: User): boolean {
        return PermissionUtil.fileIsCanOpenOwn(item, user);
    }

    public static fileIsCanRemoveOwn(item: File, user: User): boolean {
        return PermissionUtil.fileIsCanOpenOwn(item, user);
    }

    public static fileIsCanContentVectorAdd(item: File): boolean {
        return _.isNil(item.vectorId) && FileUtil.isCanContentVectorize(item.mime);
    }

    public static fileIsCanContentVectorSplit(item: File): boolean {
        return FileUtil.isTextDocument(item.mime);
    }

    public static fileIsCanContentVectorGet(item: File): boolean {
        return FileUtil.isContentVectorized(item);
    }

    public static fileIsCanContentVectorRemove(item: File): boolean {
        return FileUtil.isContentVectorized(item);
    }

    public static fileIsCanContentAnonymize(item: File): boolean {
        return FileUtil.isCanContentAnonymize(item.mime);
    }

    public static fileIsCanConvertSoundExtract(item: File): boolean {
        return item.type === FileType.VIDEO;
    }

    public static fileIsCanLinkAdd(item: File): boolean {
        return item.type !== FileType.LINK && item.type !== FileType.DIRECTORY;
    }

    //--------------------------------------------------------------------------
    //
    // 	Mcp Server Methods
    //
    //--------------------------------------------------------------------------

    public static mcpServerIsCanOpen(item: McpServer, user: User): boolean {
        return !_.isNil(user) && (_.isNil(item.userId) || item.userId === user.id);
    }

    //--------------------------------------------------------------------------
    //
    // 	User Token Methods
    //
    //--------------------------------------------------------------------------

    // Доступ владельца к личным ключам без дополнительных permissions.
    public static userTokenIsCanOpenOwn(item: UserToken, user: User): boolean {
        return !_.isNil(user) && item.userId === user.id;
    }

    public static userTokenIsCanEditOwn(item: UserToken, user: User): boolean {
        return PermissionUtil.userTokenIsCanOpenOwn(item, user);
    }

    public static userTokenIsCanRemoveOwn(item: UserToken, user: User): boolean {
        return PermissionUtil.userTokenIsCanOpenOwn(item, user);
    }

    //--------------------------------------------------------------------------
    //
    // 	Agent Methods
    //
    //--------------------------------------------------------------------------

    public static agentIsCanOpenOwn(item: Agent, user: User): boolean {
        if (_.isNil(user)) {
            return false;
        }
        return item.userId === user.id;
    }

    public static agentIsCanEditOwn(item: Agent, user: User): boolean {
        return PermissionUtil.agentIsCanOpenOwn(item, user);
    }

    public static agentIsCanRemoveOwn(item: Agent, user: User): boolean {
        return PermissionUtil.agentIsCanOpenOwn(item, user);
    }

    //--------------------------------------------------------------------------
    //
    // 	Agent Graph Methods
    //
    //--------------------------------------------------------------------------

    public static agentGraphIsCanOpenOwn(item: AgentGraph, user: User): boolean {
        if (_.isNil(user)) {
            return false;
        }
        return item.userId === user.id;
    }

    public static agentGraphIsCanEditOwn(item: AgentGraph, user: User): boolean {
        return PermissionUtil.agentGraphIsCanOpenOwn(item, user);
    }

    public static agentGraphIsCanRemoveOwn(item: AgentGraph, user: User): boolean {
        return PermissionUtil.agentGraphIsCanOpenOwn(item, user);
    }

    public static agentGraphIsCanRun(item: AgentGraph): boolean {
        return !_.isEmpty(item.nodes);
    }

    public static agentGraphRunIsCanOpenOwn(item: AgentGraphRun, user: User): boolean {
        if (_.isNil(user)) {
            return false;
        }
        return item.userId === user.id;
    }

    public static agentGraphRunIsCanResume(item: AgentGraphRun): boolean {
        return item.status === AgentGraphRunStatus.AWAITING;
    }

    public static agentGraphRunIsCanCancel(item: AgentGraphRun): boolean {
        return item.status === AgentGraphRunStatus.IN_PROGRESS || item.status === AgentGraphRunStatus.AWAITING;
    }

    /** A run that is still going is cancelled, not removed: its task lives in the memory of the process */
    public static agentGraphRunIsCanRemove(item: AgentGraphRun): boolean {
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

    /** Управлять группой (бюджет, участники, лимиты) — администратор группы без дополнительных permissions */
    public static groupIsCanManageOwn(item: Group, user: User, members?: Array<GroupMember>): boolean {
        return PermissionUtil.groupIsAdministrator(item, user, members);
    }

    /** Открыть группу (видеть остаток, своё членство) — любой участник без дополнительных permissions */
    public static groupIsCanOpenOwn(item: Group, user: User, members?: Array<GroupMember>): boolean {
        return PermissionUtil.groupIsMember(item, user, members);
    }

    /** Тратить бюджет группы — любой участник группы */
    public static groupIsCanSpend(item: Group, user: User, members?: Array<GroupMember>): boolean {
        return PermissionUtil.groupIsMember(item, user, members);
    }

    /** Удалить группу — только владелец-создатель без дополнительных permissions (не ADMIN-участник) */
    public static groupIsCanRemoveOwn(item: Group, user: User): boolean {
        if (_.isNil(user) || _.isNil(item)) {
            return false;
        }
        return item.ownerId === user.id;
    }
}
