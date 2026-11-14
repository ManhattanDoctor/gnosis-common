import { IFileReference } from '../../file';
import { IAiVideoSubmitResponse } from "../AiVideoModel";
import { IAiTask } from "./IAiTask";

/** Минимальная задача генерации видео: текстовый prompt (image-to-video задаётся опциями frameImages) */
export interface IAiVideoTask extends IAiTask {
    prompt: string;
    /** Owned images used as the first and optional last frame. */
    /** Internal provider input derived from references; not accepted by the HTTP API. */
    fileIds?: Array<number>;
    references?: Array<IFileReference>;
    /** Exact first/last frames, or subject/style reference images. */
    referenceMode?: 'frames' | 'references';
}

export type AiVideoTaskResponse = IAiVideoSubmitResponse;
