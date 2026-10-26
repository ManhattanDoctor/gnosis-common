import { Type } from 'class-transformer';
import { AiModelVideoOptions } from './AiVideoModel';

/**
 * Статусы асинхронного задания. Маппятся из статусов внешнего провайдера (у OpenRouter Videos API:
 * pending/in_progress/completed/failed). PROCESSING — задание принято провайдером и генерится;
 * терминальные — SUCCEEDED/FAILED/CANCELED.
 */
export enum AiAsyncJobStatus {
    PROCESSING = 'PROCESSING',
    SUCCEEDED = 'SUCCEEDED',
    FAILED = 'FAILED',
    CANCELED = 'CANCELED'
}

/**
 * Персистентная запись долгоживущего задания (генерация видео и т.п.). Переживает рестарт процесса:
 * поллер при старте поднимает все записи в статусе PROCESSING и продолжает опрашивать провайдера.
 * externalId — id задания у провайдера, ключ опроса. По завершении проставляются resultFileId и cost.
 */
export class AiAsyncJob {
    // --------------------------------------------------------------------------
    //
    //  Properties
    //
    // --------------------------------------------------------------------------

    public id: number;
    /** Владелец задания */
    public userId: number;
    /** Модель провайдера (например OPEN_ROUTER_VIDEO) */
    public model: string;
    /** Id задания у внешнего провайдера — ключ опроса статуса */
    public externalId: string;
    public status: AiAsyncJobStatus;
    /** Параметры исходного запроса (prompt, опции) */
    public options: AiModelVideoOptions;
    /** Файл с результатом после скачивания (null пока не готов) */
    public resultFileId?: number;
    /** Фактическая стоимость во внутренней валюте после завершения */
    public cost?: string;
    /** Текст ошибки провайдера при FAILED */
    public error?: string;
    /** Socket-комната для прогресса на фронт */
    public session?: string;

    @Type(() => Date)
    public createdDate: Date;

    @Type(() => Date)
    public updatedDate?: Date;
}
