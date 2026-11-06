import { IFileAddContext } from '../../file';
import { IOpenAiTextProgress, IOpenAiTextResponse } from "../model/openai";
import { Conversation, ConversationMessage } from "../../conversation";
import { IAiTask } from "./IAiTask";

export interface IAiConversationTask extends IAiTask {
    /** Проверенный обязательный инструмент текущего запуска; не настройки беседы. */
    requiredTool?: string;
    executionId?: string;
    fileAddContext?: IFileAddContext;
    conversation: Conversation;
    messages: Array<ConversationMessage>;
}

export type AiConversationTaskProgress = IOpenAiTextProgress;

export type AiConversationTaskResponse = IOpenAiTextResponse;