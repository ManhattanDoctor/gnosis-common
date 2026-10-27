import { IOpenAiTtsOptions, IOpenAiTtsModelDetails } from "./model/openai";
import { IOpenRouterTtsOptions, IOpenRouterTtsModelDetails, IOpenRouterTtsConsumption } from "./model/openrouter";

export enum AiTtsModel {
    OPEN_AI = 'OPEN_AI_TTS',
    OPEN_ROUTER = 'OPEN_ROUTER_TTS',
}

export type AiModelTtsOptions = IOpenAiTtsOptions | IOpenRouterTtsOptions;
export type AiModelTtsDetails  = IOpenAiTtsModelDetails | IOpenRouterTtsModelDetails;
/** Расход озвучки: у OpenAI — число символов, у OpenRouter — фактическая стоимость в долларах ({ cost }) */
export type AiModelTtsConsumption = number | IOpenRouterTtsConsumption;
