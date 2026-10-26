import { DateUtil } from "@ts-core/common";
import { AiTtsModel, AiModelTtsDetails, AiModelTtsOptions } from "./AiTtsModel";
import { AiTextModel, AiModelTextDetails, AiModelTextOptions, AiModelTextConsumption } from "./AiTextModel";
import { AiImageModel, AiModelImageDetails, AiModelImageOptions, AiModelImageConsumption } from "./AiImageModel";
import { AiVideoModel, AiModelVideoOptions, AiModelVideoConsumption, AiModelVideoDetails } from "./AiVideoModel";
import { AiConversationModel, AiModelConversationDetails, AiModelConversationOptions, AiModelConversationConsumption } from "./AiConversationModel";
import { AiModelSttDetails, AiModelSttOptions, AiSttModel } from "./AiSttModel";

export type AiModel = AiTextModel | AiImageModel | AiVideoModel | AiTtsModel | AiSttModel | AiConversationModel;
export type AiModelOptions = AiModelTextOptions | AiModelImageOptions | AiModelVideoOptions | AiModelTtsOptions | AiModelSttOptions | AiModelConversationOptions;
export type AiModelDetails = AiModelTextDetails | AiModelImageDetails | AiModelVideoDetails | AiModelTtsDetails | AiModelSttDetails | AiModelConversationDetails;
export type AiModelConsumption = AiModelTextConsumption | AiModelImageConsumption | AiModelVideoConsumption | AiModelConversationConsumption;

export const AI_MODEL_TIMEOUT = 10 * DateUtil.MILLISECONDS_MINUTE;
export const AI_MODEL_RETRIES = 10;