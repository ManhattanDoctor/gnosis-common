import { IAiImageResponse, IAiImageConsumption } from "../../AiImageModel";
import { IOpenAiImageGptOptions, IOpenAiImageGptModelDetails } from "./IOpenAiImageGpt";

export type IOpenAiImageOptions = IOpenAiImageGptOptions;

export type IOpenAiImageModelDetails = IOpenAiImageGptModelDetails;

export type IOpenAiImageProgress = void;

/** Вендор отдаёт единый, вендор-независимый результат картинок */
export type IOpenAiImageResponse = IAiImageResponse;

/** Вендор отдаёт единый, вендор-независимый расход картинок */
export type IOpenAiImageConsumption = IAiImageConsumption;

export const OPEN_AI_IMAGE_OPTIONS_N_MIN = 1;
export const OPEN_AI_IMAGE_OPTIONS_N_MAX = 4;
