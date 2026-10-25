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
