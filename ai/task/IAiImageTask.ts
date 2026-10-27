import { IOpenAiImageProgress, IOpenAiImageResponse } from "../model/openai";
import { IAiTask } from "./IAiTask";

export interface IAiImageTask extends IAiTask {
    prompt: string;
    /** Картинки для редактирования (image-to-image): без них рисуется с нуля, с ними правится исходное */
    fileIds?: Array<number>;
    /** Маска для перерисовки одной области первой картинки: прозрачные зоны — те, что перерисовываются */
    maskFileId?: number;
}

export type AiImageTaskProgress = IOpenAiImageProgress;

export type AiImageTaskResponse = IOpenAiImageResponse;

export const AI_IMAGE_TASK_PROMPT_MIN_LENGTH = 4;
export const AI_IMAGE_TASK_PROMPT_MAX_LENGTH = 1024;
