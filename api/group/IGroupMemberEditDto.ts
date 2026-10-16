import { ITraceable } from '@ts-core/common';
import { GroupMember, GroupMemberRole, GroupLimitPeriod } from '../../group';

export interface IGroupMemberEditDto extends ITraceable {
    id: number;
    role?: GroupMemberRole;
    limit?: string;
    limitPeriod?: GroupLimitPeriod;
}

export type IGroupMemberEditDtoResponse = GroupMember;
