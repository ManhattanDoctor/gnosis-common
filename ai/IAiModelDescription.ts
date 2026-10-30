import { AiModel } from './AiModel';

export interface IAiModelReference {
    provider: AiModel;
    model: string;
}

export interface IAiModelDescription {
    reference: IAiModelReference;
    name: string;
    schema: IAiModelParameterSchema;
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
