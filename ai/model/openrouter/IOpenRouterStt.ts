/**
 * Распознавание речи через OpenRouter (Audio Transcriptions API). Запрос OpenAI-совместимый
 * (POST /audio/transcriptions, аудио — base64 в input_audio либо multipart), ответ — JSON с текстом и
 * usage.cost (доллары), поэтому фактическая стоимость приходит прямо в ответе. Список — реальные id
 * каталога OpenRouter. Держать синоним со строкой задачи.
 */
export enum OpenRouterSttModel {
    GPT_TRANSCRIBE = 'openai/gpt-transcribe',
    SCRIBE_V2 = 'elevenlabs/scribe-v2',
    VOXTRAL_MINI_TRANSCRIBE = 'mistralai/voxtral-mini-transcribe-3-0'
}

export const OPEN_ROUTER_STT_MODELS_ACTUAL: Array<string> = [
    OpenRouterSttModel.GPT_TRANSCRIBE,
    OpenRouterSttModel.SCRIBE_V2,
    OpenRouterSttModel.VOXTRAL_MINI_TRANSCRIBE
];

export const OPEN_ROUTER_STT_MODEL_DEFAULT: string = OpenRouterSttModel.GPT_TRANSCRIBE;

/**
 * Опции OpenRouter-распознавания: модель — строка id каталога; подсказка и язык опциональны
 * (как у OpenAI STT). Маски/температуры у OpenRouter здесь нет.
 */
export interface IOpenRouterSttOptions {
    model: string;
    prompt?: string;
    language?: string;
}

/** Детали для фронта (getModelDetails): список доступных моделей распознавания OpenRouter */
export interface IOpenRouterSttModelDetails {
    models: Array<string>;
}

export type IOpenRouterSttProgress = void;

/**
 * Расход OpenRouter-распознавания: фактическая стоимость запроса в долларах (usage.cost в JSON-ответе).
 * Конвертацию в валюту проекта делает AiCalculator по coinId провайдера (USD) — как у картинок и видео.
 */
export interface IOpenRouterSttConsumption {
    cost: number;
}
