import { AiImageModel } from './AiImageModel';
import { IAiModelReference, IAiModelDescription, IAiModelParameterSchema, IAiModelEndpoint } from './IAiModelDescription';

/** Модель определяется вместе с подключением: возможности разных API не объединяются. */
export interface IAiImageModelReference extends IAiModelReference {
    provider: AiImageModel;
    model: string;
}

export interface IAiImageModelDescription extends IAiModelDescription {
    reference: IAiImageModelReference;
    name: string;
    schema: IAiImageParameterSchema;
    endpoints?: Array<IAiImageModelEndpoint>;
}

export type IAiImageParameterSchema = IAiModelParameterSchema;
export type IAiImageModelEndpoint = IAiModelEndpoint;
