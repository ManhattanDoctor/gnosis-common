/**
 * Озвучка текста через OpenRouter (Audio Speech API, output audio). Запрос OpenAI-совместимый
 * (POST /audio/speech), но ответ — бинарный поток аудио, поэтому фактическая стоимость не приходит
 * в теле: её узнают отдельным запросом к /generation по X-Generation-Id. Список — реальные id каталога
 * OpenRouter. Держать синоним со строкой задачи.
 */
export enum OpenRouterTtsModel {
    ELEVEN_FLASH_V2_5 = 'elevenlabs/eleven-flash-v2.5',
    VOXTRAL_MINI_TTS = 'mistralai/voxtral-mini-tts-3-0',
    GEMINI_FLASH_TTS = 'google/gemini-3.8-flash-tts'
}

export const OPEN_ROUTER_TTS_MODELS_ACTUAL: Array<string> = [
    OpenRouterTtsModel.ELEVEN_FLASH_V2_5,
    OpenRouterTtsModel.VOXTRAL_MINI_TTS,
    OpenRouterTtsModel.GEMINI_FLASH_TTS
];

export const OPEN_ROUTER_TTS_MODEL_DEFAULT: string = OpenRouterTtsModel.ELEVEN_FLASH_V2_5;

/**
 * Голос у каждой TTS-модели свой, единого нет — некоторые вендоры (ElevenLabs) требуют его явно. Пока голос
 * не выбирается во фронте, задача берёт отсюда дефолтный голос модели, чтобы запрос не падал. Ключ — id
 * модели; для модели не из списка голос не подставляется (вендор возьмёт свой, если умеет).
 */
export const OPEN_ROUTER_TTS_VOICE_DEFAULT: Record<string, string> = {
    [OpenRouterTtsModel.ELEVEN_FLASH_V2_5]: 'george',
    [OpenRouterTtsModel.VOXTRAL_MINI_TTS]: 'en_paul_neutral',
    [OpenRouterTtsModel.GEMINI_FLASH_TTS]: 'Kore'
};

/** Формат ответа аудио: mp3 (сжатый) либо pcm (без сжатия); по умолчанию берём mp3 */
export const OPEN_ROUTER_TTS_FORMAT_DEFAULT: string = 'mp3';

/**
 * Опции OpenRouter-озвучки: модель — строка id каталога; голос и формат — строки (набор зависит от модели,
 * поэтому не enum). Скорость поддерживают не все модели.
 */
export interface IOpenRouterTtsOptions {
    model: string;
    voice?: string;
    format?: string;
    speed?: number;
}

/** Детали для фронта (getModelDetails): список доступных моделей озвучки OpenRouter */
export interface IOpenRouterTtsModelDetails {
    models: Array<string>;
}

export type IOpenRouterTtsProgress = void;

/**
 * Расход OpenRouter-озвучки: фактическая стоимость запроса в долларах (total_cost из /generation).
 * Конвертацию в валюту проекта делает AiCalculator по coinId провайдера (USD) — как у картинок и видео.
 */
export interface IOpenRouterTtsConsumption {
    cost: number;
}
