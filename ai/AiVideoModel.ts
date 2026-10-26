import { IOpenRouterVideoOptions } from "./model/openrouter";

export enum AiVideoModel {
    OPEN_ROUTER = 'OPEN_ROUTER_VIDEO'
}

export type AiModelVideoOptions = IOpenRouterVideoOptions;

/** Детали видео-модели для фронта (getModelDetails): список доступных моделей OpenRouter */
export interface IAiVideoModelDetails {
    models: Array<string>;
}

export type AiModelVideoDetails = IAiVideoModelDetails;

/** Расход генерации видео: фактическая стоимость в долларах из usage.cost poll-ответа OpenRouter */
export interface IAiVideoConsumption {
    cost: number;
}

export type AiModelVideoConsumption = IAiVideoConsumption;

/** Ответ запуска видео-задачи: id задания у провайдера (результат придёт позже через поллер) */
export interface IAiVideoSubmitResponse {
    externalId: string;
}
