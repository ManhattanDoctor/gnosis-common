import { IAiImageResponse } from "../AiImageModel";
import { IAiTask } from "./IAiTask";

export interface IAiImageTask extends IAiTask {
    prompt: string;
    /** Картинки для редактирования (image-to-image): без них рисуется с нуля, с ними правится исходное */
    fileIds?: Array<number>;
    /** Маска для перерисовки одной области первой картинки: прозрачные зоны — те, что перерисовываются */
    maskFileId?: number;
}

/** Картинка приходит разом, промежуточного прогресса нет (как у видео/медиа) */
export type AiImageTaskProgress = void;

export type AiImageTaskResponse = IAiImageResponse;

export const AI_IMAGE_TASK_PROMPT_MIN_LENGTH = 4;
export const AI_IMAGE_TASK_PROMPT_MAX_LENGTH = 1024;
