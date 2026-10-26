/**
 * Модели генерации видео через OpenRouter (output video). Работают через асинхронный Videos API:
 * POST /api/v1/videos возвращает id задания, статус опрашивается GET /api/v1/videos/{id}, готовый файл
 * забирается с /content. Генерация идёт минутами, поэтому задача персистентная (см. AiAsyncJob).
 * Список — реальные id каталога OpenRouter (вкладка Video). Держать синоним со строкой тула.
 */
export enum OpenRouterVideoModel {
    VEO_3_1 = 'google/veo-3.1',
    RUNWAY_GEN_4_5 = 'runway/gen-4.5',
    HEYGEN_VIDEO = 'heygen/heygen-video',
    SEEDANCE_2_5 = 'bytedance/seedance-2.5',
    WAN_3_0 = 'alibaba/wan-3.0'
}

export const OPEN_ROUTER_VIDEO_MODELS_ACTUAL: Array<string> = [
    OpenRouterVideoModel.VEO_3_1,
    OpenRouterVideoModel.RUNWAY_GEN_4_5,
    OpenRouterVideoModel.HEYGEN_VIDEO,
    OpenRouterVideoModel.SEEDANCE_2_5,
    OpenRouterVideoModel.WAN_3_0
];

export const OPEN_ROUTER_VIDEO_MODEL_DEFAULT: string = OpenRouterVideoModel.VEO_3_1;

/**
 * Разрешения, которые принимает Videos API OpenRouter. Какие реально поддержаны — зависит от модели,
 * поэтому это общий набор для выбора в UI, а финальную валидацию делает провайдер (вернёт понятную ошибку).
 */
export const OPEN_ROUTER_VIDEO_RESOLUTIONS: Array<string> = ['360p', '480p', '720p', '768p', '1080p', '1K', '2K', '4K'];

/** Длительности в секундах — типичные для видео-моделей; поддержка конкретных значений зависит от модели */
export const OPEN_ROUTER_VIDEO_DURATIONS: Array<number> = [4, 6, 8, 10];

/**
 * Опции запроса генерации видео — поля тела POST /api/v1/videos. Разрешение задаётся либо resolution
 * (+ aspectRatio), либо size «ШxВ» — они взаимозаменяемы. frameImages — для image-to-video (первый/последний кадр).
 */
export interface IOpenRouterVideoOptions {
    model: string;
    prompt: string;
    duration?: number;
    resolution?: string;
    aspectRatio?: string;
    size?: string;
    generateAudio?: boolean;
    seed?: number;
}
