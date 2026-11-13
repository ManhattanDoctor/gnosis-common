import { AiModel } from './AiModel';
import { AiModelStatus } from './AiModelStatus';

export interface IAiModelReference {
    provider: AiModel;
    model: string;
}

export interface IAiModelDescription {
    id?: number;
    status?: AiModelStatus;
    sortOrder?: number;
    reference: IAiModelReference;
    name: string;
    schema: IAiModelParameterSchema;
    capabilities?: Array<AiModelCapability>;
    endpoints?: Array<IAiModelEndpoint>;
}

/** JSON Schema: пригодна для формы настроек и не требует Zod на клиенте. */
export interface IAiModelParameterSchema {
    type?: string;
    description?: string;
    enum?: Array<unknown>;
    const?: unknown;
    default?: unknown;
    minimum?: number;
    maximum?: number;
    /** Per-media limits for mixed video-generation references. */
    'x-referenceLimits'?: Record<string, { maxItems: number; maxBytes?: number; minPixels?: number; mimeTypes?: Array<string> }>;
    minItems?: number;
    maxItems?: number;
    minLength?: number;
    maxLength?: number;
    pattern?: string;
    properties?: Record<string, IAiModelParameterSchema>;
    items?: IAiModelParameterSchema;
    required?: Array<string>;
    additionalProperties?: boolean | IAiModelParameterSchema;
    allOf?: Array<IAiModelParameterSchema>;
    anyOf?: Array<IAiModelParameterSchema>;
    if?: IAiModelParameterSchema;
    then?: IAiModelParameterSchema;
    not?: IAiModelParameterSchema;
}

export interface IAiModelEndpoint {
    provider: string;
    tag?: string;
    schema: IAiModelParameterSchema;
    passthrough: Array<string>;
}

export enum AiModelCapability {
    TEXT_INPUT = 'TEXT_INPUT',
    IMAGE_INPUT = 'IMAGE_INPUT',
    AUDIO_INPUT = 'AUDIO_INPUT',
    VIDEO_INPUT = 'VIDEO_INPUT',
    TEXT_OUTPUT = 'TEXT_OUTPUT',
    IMAGE_OUTPUT = 'IMAGE_OUTPUT',
    AUDIO_OUTPUT = 'AUDIO_OUTPUT',
    VIDEO_OUTPUT = 'VIDEO_OUTPUT',
    IMAGE_EDIT = 'IMAGE_EDIT',
    TOOLS = 'TOOLS',
    STRUCTURED_OUTPUT = 'STRUCTURED_OUTPUT',
}
