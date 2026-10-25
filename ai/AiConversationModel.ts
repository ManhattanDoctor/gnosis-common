import { IOpenAiTextOptions, IOpenAiTextConsumption, IOpenAiTextModelDetails } from "./model/openai";
import { IAnthropicTextOptions, IAnthropicTextConsumption, IAnthropicTextModelDetails } from "./model/anthropic";
import { INostraTextOptions, INostraTextConsumption, INostraTextModelDetails } from "./model/nostra";
import { IOpenRouterTextOptions, IOpenRouterTextConsumption, IOpenRouterTextModelDetails } from "./model/openrouter";

export enum AiConversationModel {
    OPEN_AI = 'OPEN_AI_CONVERSATION',
    ANTHROPIC = 'ANTHROPIC_CONVERSATION',
    NOSTRA = 'NOSTRA_CONVERSATION',
    OPEN_ROUTER = 'OPEN_ROUTER_CONVERSATION'
}

export type AiModelConversationOptions = IOpenAiTextOptions | IAnthropicTextOptions | INostraTextOptions | IOpenRouterTextOptions;
export type AiModelConversationDetails = IOpenAiTextModelDetails | IAnthropicTextModelDetails | INostraTextModelDetails | IOpenRouterTextModelDetails;
export type AiModelConversationConsumption = IOpenAiTextConsumption | IAnthropicTextConsumption | INostraTextConsumption | IOpenRouterTextConsumption;
