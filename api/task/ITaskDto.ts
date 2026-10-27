import { ITraceable } from "@ts-core/common";
import { AiModelConsumption, AiModel, AiModelDetails, AiModelOptions, IAiVideoSubmitResponse } from "../../ai";
import { IAiImageTask, AiImageTaskProgress, AiImageTaskResponse, IAiTextTask, AiSttTaskResponse, AiSttTaskProgress, AiTextTaskProgress, AiTextTaskResponse, IAiTtsTask, AiTtsTaskProgress, AiTtsTaskResponse, IAiConversationTask, AiConversationTaskProgress, AiConversationTaskResponse, IAiSttTask, IAiVideoTask } from "../../ai/task";
import { IPayer } from "../../group";

export interface ITaskDto<T extends ITaskTask = ITaskTask, M extends ITaskModel = ITaskModel, O extends ITaskOptions = ITaskOptions> extends ITraceable {
    task: T;
    model: M;
    options: O;
    // Источник оплаты: личный баланс (по умолчанию) либо кошелёк группы
    payer?: IPayer;
}

export type ITaskModel = AiModel;
export type ITaskOptions = AiModelOptions;
export type ITaskDetails = AiModelDetails;
export type ITaskConsumption = AiModelConsumption;

export type ITaskTask = IAiTextTask | IAiImageTask | IAiTtsTask | IAiSttTask | IAiConversationTask | IAiVideoTask;
export type ITaskProgress = AiTextTaskProgress | AiImageTaskProgress | AiTtsTaskProgress | AiSttTaskProgress | AiConversationTaskProgress;
export type ITaskDtoResponse = AiTextTaskResponse | AiImageTaskResponse | AiTtsTaskResponse | AiSttTaskResponse | AiConversationTaskResponse | IAiVideoSubmitResponse;
