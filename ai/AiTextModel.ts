import { IOpenAiTextOptions, IOpenAiTextModelDetails, IOpenAiTextConsumption, IOpenAiTextProgress, IOpenAiTextResponse } from "./model/openai";
import { IAnthropicTextOptions, IAnthropicTextModelDetails, IAnthropicTextConsumption, IAnthropicTextProgress, IAnthropicTextResponse } from "./model/anthropic";
import { INostraTextOptions, INostraTextModelDetails, INostraTextConsumption, INostraTextProgress, INostraTextResponse } from "./model/nostra";
import { IOpenRouterTextOptions, IOpenRouterTextModelDetails, IOpenRouterTextConsumption, IOpenRouterTextProgress, IOpenRouterTextResponse } from "./model/openrouter";

export enum AiTextModel {
    OPEN_AI = 'OPEN_AI_TEXT',
    ANTHROPIC = 'ANTHROPIC_TEXT',
    NOSTRA = 'NOSTRA_TEXT',
    OPEN_ROUTER = 'OPEN_ROUTER_TEXT',
}

export enum AiTextOutputFormat {
    PLAIN_EXTENDED = 'PLAIN_EXTENDED',
    PLAIN = 'PLAIN',
    HTML = 'HTML',
}

export interface IAiTextOptions {
    outputFormat?: string;
}

export type AiModelTextOptions = IOpenAiTextOptions | IAnthropicTextOptions | INostraTextOptions | IOpenRouterTextOptions;
export type AiModelTextDetails = IOpenAiTextModelDetails | IAnthropicTextModelDetails | INostraTextModelDetails | IOpenRouterTextModelDetails;
export type AiModelTextProgress = IOpenAiTextProgress | IAnthropicTextProgress | INostraTextProgress | IOpenRouterTextProgress;
export type AiModelTextConsumption = IOpenAiTextConsumption | IAnthropicTextConsumption | INostraTextConsumption | IOpenRouterTextConsumption;
export type AiModelTextResponse = IOpenAiTextResponse | IAnthropicTextResponse | INostraTextResponse | IOpenRouterTextResponse;
