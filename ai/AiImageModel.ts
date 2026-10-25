import { IOpenAiImageConsumption, IOpenAiImageGptConsumption, IOpenAiImageModelDetails, IOpenAiImageOptions } from "./model/openai";

export enum AiImageModel {
    OPEN_AI_GPT = 'OPEN_AI_IMAGE_GPT',
    /** @deprecated Removed in favour of OPEN_AI_GPT, kept to read the existing records only. */
    OPEN_AI_DALLE_3 = 'OPEN_AI_IMAGE_DALLE_3',
    /** @deprecated Removed in favour of OPEN_AI_GPT, kept to read the existing records only. */
    OPEN_AI_DALLE_2 = 'OPEN_AI_IMAGE_DALLE_2',
}

export interface IAiImage {
    mime: string;
    width: number;
    height: number;
    source: string;
}

export type AiModelImageOptions = IOpenAiImageOptions;
export type AiModelImageDetails = IOpenAiImageModelDetails;
export type AiModelImageConsumption = IOpenAiImageConsumption | IOpenAiImageGptConsumption;