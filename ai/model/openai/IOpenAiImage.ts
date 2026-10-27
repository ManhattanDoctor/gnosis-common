import { IAiImageResponse } from "../../AiImageModel";
import { IOpenAiImageGptOptions, IOpenAiImageGptModelDetails } from "./IOpenAiImageGpt";

export type IOpenAiImageOptions = IOpenAiImageGptOptions;

export type IOpenAiImageModelDetails = IOpenAiImageGptModelDetails;

export type IOpenAiImageProgress = void;

/** Результат картинок — единый, вендор-независимый (список IAiImage) */
export type IOpenAiImageResponse = IAiImageResponse;

/**
 * Расход OpenAI-картинок: gpt-image бьётся по токенам (не по числу картинок), поэтому отдаём usage.
 * Свой тип вендора — консьюмер (getAmount OpenAI-провайдера) читает именно его. Фронту не виден.
 */
export interface IOpenAiImageConsumption {
    amount: number;

    input?: number;
    output?: number;
}
