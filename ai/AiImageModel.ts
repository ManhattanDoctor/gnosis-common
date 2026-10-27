import { IOpenAiImageConsumption, IOpenAiImageModelDetails, IOpenAiImageOptions } from "./model/openai";
import { IOpenRouterImageConsumption, IOpenRouterImageModelDetails, IOpenRouterImageOptions } from "./model/openrouter";

export enum AiImageModel {
    OPEN_AI_GPT = 'OPEN_AI_IMAGE_GPT',
    OPEN_ROUTER = 'OPEN_ROUTER_IMAGE',
}

/** Одна готовая картинка — единый результат любого вендора (как IAiImage у видео отдаёт файл) */
export interface IAiImage {
    mime: string;
    width: number;
    height: number;
    source: string;
}

/**
 * Ответ картиночной задачи: список готовых картинок — ЕДИНЫЙ для всех вендоров (OpenAI, OpenRouter, …).
 * Фронту неважно, каким вендором нарисовано — он получает один формат.
 */
export type IAiImageResponse = Array<IAiImage>;

/**
 * options, details и consumption по природе вендор-специфичны (у каждого свой набор опций и своя модель
 * биллинга), поэтому это union вендоров — как у видео. consumption фронту не виден: это приватный контракт
 * между задачей и её же провайдером (getAmount).
 */
export type AiModelImageOptions = IOpenAiImageOptions | IOpenRouterImageOptions;
export type AiModelImageDetails = IOpenAiImageModelDetails | IOpenRouterImageModelDetails;
export type AiModelImageConsumption = IOpenAiImageConsumption | IOpenRouterImageConsumption;