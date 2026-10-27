import { DateUtil } from "@ts-core/common";
import { IOpenRouterVideoOptions } from "./model/openrouter";

export enum AiVideoModel {
    OPEN_ROUTER = 'OPEN_ROUTER_VIDEO'
}

/**
 * Таймаут HTTP-запроса генерации видео. Запрос /api/task для видео ЖДЁТ готовности (бэкенд доводит рендер
 * поллером, минуты), поэтому фронт должен ждать не меньше бэкенда (там ожидание задания до 15 мин + запас на
 * команду). Берём с запасом над этим, чтобы фронт не отвалился раньше, чем бэкенд завершит.
 */
export const AI_VIDEO_TIMEOUT = 20 * DateUtil.MILLISECONDS_MINUTE;

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

/**
 * Ответ видео-задачи. Задача дожидается готовности (поллер доводит генерацию), поэтому в ответе —
 * id готового файла результата. externalId (id задания у провайдера) остаётся для справки.
 */
export interface IAiVideoSubmitResponse {
    externalId: string;
    fileId: number;
}
