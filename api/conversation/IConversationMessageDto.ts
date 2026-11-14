import { IAiToolConnection } from '../../ai/IAiToolConnection';
import { IFileReference } from '../../file';
import { ITraceable } from '@ts-core/common';
import { ConversationMessage, ConversationMessageRole } from '../../conversation';

export interface IConversationMessageAddDto extends ITraceable {
    role: ConversationMessageRole;
    text: string;
    references?: Array<IFileReference>;
    history?: number;
    /** Предпочтения только текущего запуска; настройки беседы не изменяются. */
    settings?: IConversationRequestSettings;
}

export type IConversationMessageAddDtoResponse = ConversationMessage;

export interface IConversationRequestSettings {
    /** Отключает инструменты только для текущего сообщения. */
    isToolsDisabled?: boolean;
    /** Переопределяются только уже подключённые инструменты. */
    tools?: Array<IAiToolConnection>;
}
