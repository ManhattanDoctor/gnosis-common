import { IOpenAiTtsOptions, IOpenAiTtsModelDetails } from "./model/openai";

export enum AiTtsModel {
    OPEN_AI = 'OPEN_AI_TTS',
}

export type AiModelTtsOptions = IOpenAiTtsOptions;
export type AiModelTtsDetails  = IOpenAiTtsModelDetails;
/** Расход озвучки — число символов; вендор-независимо (число) */
export type AiModelTtsConsumption = number;
