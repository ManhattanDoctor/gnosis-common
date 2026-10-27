import { IAiVideoSubmitResponse } from "../AiVideoModel";
import { IAiTask } from "./IAiTask";

/** Минимальная задача генерации видео: текстовый prompt (image-to-video задаётся опциями frameImages) */
export interface IAiVideoTask extends IAiTask {
    prompt: string;
}

export type AiVideoTaskResponse = IAiVideoSubmitResponse;
