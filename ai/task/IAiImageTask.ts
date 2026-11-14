import { IFileReference } from '../../file/IFileReference';
import { IAiImageResponse } from "../AiImageModel";
import { IAiTask } from "./IAiTask";

export interface IAiImageTask extends IAiTask {
    prompt: string;
    /** Картинки для редактирования (image-to-image): без них рисуется с нуля, с ними правится исходное */
    /** Internal provider input derived from references; not accepted by the HTTP API. */
    fileIds?: Array<number>;
    references?: Array<IFileReference>;
    /** Маска для перерисовки одной области первой картинки: прозрачные зоны — те, что перерисовываются */
    maskFileId?: number;
}

/** Картинка приходит разом, промежуточного прогресса нет (как у видео/медиа) */
export type AiImageTaskProgress = void;

export type AiImageTaskResponse = IAiImageResponse;

export const AI_IMAGE_TASK_PROMPT_MIN_LENGTH = 4;
export const AI_IMAGE_TASK_PROMPT_MAX_LENGTH = 1024;
