import { Group, GroupMember } from '../../group';

/**
 * Группа с текущим остатком кошелька. `member` — членство запрашивающего
 * пользователя (его лимит), если он участник, а не владелец. `members` —
 * полный список участников, виден только владельцу и администратору.
 */
export interface IGroupGetDtoResponse extends Group {
    budget: string;
    member?: GroupMember;
    members?: Array<GroupMember>;
}
