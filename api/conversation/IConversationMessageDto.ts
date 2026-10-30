import { IAiToolConnection } from '../../ai/IAiToolConnection';
import { ITraceable } from '@ts-core/common';
import { ConversationMessage, ConversationMessageRole } from '../../conversation';

export interface IConversationMessageAddDto extends ITraceable {
    role: ConversationMessageRole;
    text: string;
    files?: Array<number>;
    history?: number;
    /** Предпочтения только текущего запуска; настройки беседы не изменяются. */
    settings?: IConversationRequestSettings;
}

export type IConversationMessageAddDtoResponse = ConversationMessage;

export interface IConversationRequestSettings {
    /** Переопределяются только уже подключённые инструменты. */
    tools?: Array<IAiToolConnection>;
}
