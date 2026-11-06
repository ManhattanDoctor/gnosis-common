import { ITraceable } from '@ts-core/common';
import { Conversation } from '../../conversation';

export interface IConversationPatchDto extends ITraceable {
    id: number;
    isFavorite?: boolean;
    isArchived?: boolean;
}

export type IConversationPatchDtoResponse = Conversation;
