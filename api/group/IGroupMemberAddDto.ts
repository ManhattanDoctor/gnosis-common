import { ITraceable } from '@ts-core/common';
import { GroupMember, GroupMemberRole, GroupLimitPeriod } from '../../group';

export interface IGroupMemberAddDto extends ITraceable {
    groupId: number;
    userId: number;
    role?: GroupMemberRole;
    limit?: string;
    limitPeriod?: GroupLimitPeriod;
}

export type IGroupMemberAddDtoResponse = GroupMember;
