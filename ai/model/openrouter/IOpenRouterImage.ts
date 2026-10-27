/**
 * Модели генерации картинок через OpenRouter (output image). В отличие от OpenAI images.generate они
 * работают через Chat Completions: картинка приходит в chat-ответе. Список — реальные id каталога OpenRouter;
 * правку поддерживают как «референс + текст», без маски. Держать синоним со строкой тула.
 */
export enum OpenRouterImageModel {
    GEMINI_FLASH_IMAGE = 'google/gemini-2.5-flash-image',
    GEMINI_PRO_IMAGE = 'google/gemini-3-pro-image',
    GPT_IMAGE = 'openai/gpt-5-image',
    GPT_IMAGE_MINI = 'openai/gpt-5-image-mini'
}

export const OPEN_ROUTER_IMAGE_MODELS_ACTUAL: Array<string> = [
    OpenRouterImageModel.GEMINI_FLASH_IMAGE,
    OpenRouterImageModel.GEMINI_PRO_IMAGE,
    OpenRouterImageModel.GPT_IMAGE,
    OpenRouterImageModel.GPT_IMAGE_MINI
];

export const OPEN_ROUTER_IMAGE_MODEL_DEFAULT: string = OpenRouterImageModel.GEMINI_FLASH_IMAGE;

/** Опции OpenRouter-картинок: модель задаётся строкой (id каталога OpenRouter), маски нет (API её не умеет) */
export interface IOpenRouterImageOptions {
    model: string;
}

/** Детали для фронта (getModelDetails): список доступных моделей картинок OpenRouter */
export interface IOpenRouterImageModelDetails {
    models: Array<string>;
}

export type IOpenRouterImageProgress = void;

/**
 * Расход OpenRouter-картинок: фактическая стоимость запроса в долларах (usage.cost при usage.include) —
 * как у OpenRouter-видео. Конвертацию в рубли делает AiCalculator по coinId прайса модели (USD).
 */
export interface IOpenRouterImageConsumption {
    cost: number;
}
