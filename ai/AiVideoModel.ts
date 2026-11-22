import { IOpenRouterVideoOptions } from "./model/openrouter";

export enum AiVideoModel {
    OPEN_ROUTER = 'OPEN_ROUTER_VIDEO'
}

export { AI_MODEL_TIMEOUT as AI_VIDEO_TIMEOUT } from './requestTimeout.json';

export type AiModelVideoOptions = IOpenRouterVideoOptions;

/** Детали видео-модели для фронта (getModelDetails): список доступных моделей OpenRouter */
export interface IAiVideoModelDetails {
    models: Array<string>;
}

export type AiModelVideoDetails = IAiVideoModelDetails;

/** Расход генерации видео: фактическая стоимость в долларах из usage.cost poll-ответа OpenRouter */
export interface IAiVideoConsumption {
    cost: string;
}

export type AiModelVideoConsumption = IAiVideoConsumption;

/**
 * Ответ видео-задачи. Задача дожидается готовности (поллер доводит генерацию), поэтому в ответе —
 * id готового файла результата. externalId (id задания у провайдера) остаётся для справки.
 */
export interface IAiVideoSubmitResponse {
    externalId: string;
    fileId: number;
}
