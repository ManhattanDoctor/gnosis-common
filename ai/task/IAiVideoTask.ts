import { IAiVideoSubmitResponse } from "../AiVideoModel";
import { IAiTask } from "./IAiTask";

/** Минимальная задача генерации видео: текстовый prompt (image-to-video задаётся опциями frameImages) */
export interface IAiVideoTask extends IAiTask {
    prompt: string;
    /** Owned images used as the first and optional last frame. */
    fileIds?: Array<number>;
}

export type AiVideoTaskResponse = IAiVideoSubmitResponse;
