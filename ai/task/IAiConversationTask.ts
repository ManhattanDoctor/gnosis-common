import { IFileAddContext, IFileReference } from '../../file';
import { IOpenAiTextProgress, IOpenAiTextResponse } from "../model/openai";
import { Conversation, ConversationMessage } from "../../conversation";
import { IAiTask } from "./IAiTask";

export interface IAiConversationTask extends IAiTask {
    /** Инструкции текущего запроса; не наследуются из истории. */
    instructions?: string;
    /** Проверенный обязательный инструмент текущего запуска; не настройки беседы. */
    requiredTool?: string;
    requiredToolInput?: Record<string, unknown>;
    executionId?: string;
    fileAddContext?: IFileAddContext;
    conversation: Conversation;
    messages: Array<ConversationMessage>;
    /** Available attachments, independent of the text history window. */
    references?: Array<IFileReference>;
}

export type AiConversationTaskProgress = IOpenAiTextProgress;

export type AiConversationTaskResponse = IOpenAiTextResponse;