import { AiToolConnection } from '../../IAiToolConnection';
import { IAiTextConsumption } from "../IAiTextConsumption";
import { IAiTextOptions, IAiToolItem } from "../../../ai";
import { IAiTextProgress } from "../IAiTextProgress";
import { IAiTextResponse } from "../IAiTextResponse";

/** Модели через OpenRouter: единый шлюз к множеству провайдеров по протоколу OpenAI, свой адрес и ключ */
export interface IOpenRouterTextOptions extends IAiTextOptions {
    model: OpenRouterTextModel;
    /** Either an AiToolType value or an mcp server uid */
    tools?: Array<AiToolConnection>;
    maxTokens?: number;
    temperature?: number;
}

/**
 * Имена моделей в формате OpenRouter «vendor/model». Это ключ и в запросе, и в прайсе ai_price:
 * слэш в имени безопасен, цена берётся по ключу, а не по lodash-пути
 */
export enum OpenRouterTextModel {
    DEEPSEEK_CHAT = 'deepseek/deepseek-chat',
    GEMINI_25_PRO = 'google/gemini-2.5-pro',
    GROK_4 = 'x-ai/grok-4',
    QWEN3_MAX = 'qwen/qwen3-max',
    CLAUDE_SONNET_45 = 'anthropic/claude-sonnet-4.5',
}

/** Models offered for a new selection, the first one is used as the default */
export const OPEN_ROUTER_TEXT_MODELS_ACTUAL: Array<OpenRouterTextModel> = [
    OpenRouterTextModel.DEEPSEEK_CHAT,
    OpenRouterTextModel.GEMINI_25_PRO,
    OpenRouterTextModel.GROK_4,
    OpenRouterTextModel.QWEN3_MAX,
    OpenRouterTextModel.CLAUDE_SONNET_45,
];

export type IOpenRouterTextProgress = IAiTextProgress;

export type IOpenRouterTextResponse = IAiTextResponse;

/**
 * Расход OpenRouter: помимо токенов приходит фактическая стоимость запроса в долларах (usage.cost),
 * когда в запрос передан usage: { include: true }. Биллинг гибридный — при наличии cost считаем по нему
 * точно, иначе откатываемся на потокенный прайс из ai_price (он же нужен для потолка задачи и прогноза в графах)
 */
export interface IOpenRouterTextConsumption extends IAiTextConsumption {
    /** Фактическая стоимость запроса в долларах США из ответа OpenRouter, если провайдер её вернул */
    cost?: number;
}

export interface IOpenRouterTextModelDetails {
    models: Array<OpenRouterTextModel>;
    tools: Array<IAiToolItem>;
}

export const OPEN_ROUTER_TEXT_OPTIONS_TEMPERATURE_MIN = 0;
export const OPEN_ROUTER_TEXT_OPTIONS_TEMPERATURE_MAX = 2;

export const OPEN_ROUTER_TEXT_OPTIONS_MAX_TOKENS_MIN = 0;
export const OPEN_ROUTER_TEXT_OPTIONS_MAX_TOKENS_MAX = 128_000;
