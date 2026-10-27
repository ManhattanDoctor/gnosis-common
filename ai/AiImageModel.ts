import { IOpenAiImageModelDetails, IOpenAiImageOptions } from "./model/openai";

export enum AiImageModel {
    OPEN_AI_GPT = 'OPEN_AI_IMAGE_GPT',
}

/** Одна готовая картинка — единый результат любого вендора (как IAiImage у видео отдаёт файл) */
export interface IAiImage {
    mime: string;
    width: number;
    height: number;
    source: string;
}

/** Ответ картиночной задачи: список готовых картинок — единый для всех вендоров (OpenAI, OpenRouter, …) */
export type IAiImageResponse = Array<IAiImage>;

/** Расход генерации картинки — единый для всех вендоров (биллинг по токенам/факту) */
export interface IAiImageConsumption {
    amount: number;

    input?: number;
    output?: number;
}

/** options и details по природе вендор-специфичны (у каждого свой набор), поэтому это псевдонимы на вендора */
export type AiModelImageOptions = IOpenAiImageOptions;
export type AiModelImageDetails = IOpenAiImageModelDetails;
export type AiModelImageConsumption = IAiImageConsumption;