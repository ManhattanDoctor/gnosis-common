import { IOpenAiSttOptions, IOpenAiSttModelDetails } from "./model/openai";
import { IOpenRouterSttOptions, IOpenRouterSttModelDetails, IOpenRouterSttConsumption } from "./model/openrouter";

export enum AiSttModel {
    OPEN_AI = 'OPEN_AI_STT',
    OPEN_ROUTER = 'OPEN_ROUTER_STT'
}

export type AiModelSttOptions = IOpenAiSttOptions | IOpenRouterSttOptions;
export type AiModelSttDetails  = IOpenAiSttModelDetails | IOpenRouterSttModelDetails;
/** Расход распознавания: у OpenAI — минуты аудио, у OpenRouter — фактическая стоимость в долларах ({ cost }) */
export type AiModelSttConsumption = number | IOpenRouterSttConsumption;
