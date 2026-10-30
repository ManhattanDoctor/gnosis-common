export interface IOpenAiImageGptOptions {
    model: OpenAiImageGptModel;
    size?: string;
    quality?: OpenAiImageGptQuality;
    background?: OpenAiImageGptBackground;
    compression?: number;
    format?: OpenAiImageGptFormat;
    moderation?: OpenAiImageGptModeration;
    inputFidelity?: OpenAiImageGptInputFidelity;
    stream?: boolean;
    partialImages?: number;
}

export enum OpenAiImageGptModel {
    GPT_IMAGE_2 = 'gpt-image-2',
    GPT_IMAGE_5 = 'gpt-image-1.5',
    GPT_IMAGE_1_MINI = 'gpt-image-1-mini',

    /** @deprecated Superseded by GPT_IMAGE_2. */
    GPT_IMAGE_1 = 'gpt-image-1',
}

/** Models offered for a new selection, the first one is used as the default */
export const OPEN_AI_IMAGE_GPT_MODELS_ACTUAL: Array<OpenAiImageGptModel> = [
    OpenAiImageGptModel.GPT_IMAGE_2,
    OpenAiImageGptModel.GPT_IMAGE_5,
    OpenAiImageGptModel.GPT_IMAGE_1_MINI,
];

export enum OpenAiImageGptSize {
    AUTO = 'auto',
    SIZE_1024 = '1024x1024',
    SIZE_1536_1024 = '1536x1024',
    SIZE_1024_1536 = '1024x1536',
}

export enum OpenAiImageGptQuality {
    AUTO = 'auto',
    LOW = 'low',
    MEDIUM = 'medium',
    HIGH = 'high',
}

export enum OpenAiImageGptBackground {
    AUTO = 'auto',
    TRANSPARENT = 'transparent',
    OPAQUE = 'opaque',
}

export interface IOpenAiImageGptModelDetails {
    sizes: Array<OpenAiImageGptSize>;
    models: Array<OpenAiImageGptModel>;
    qualities: Array<OpenAiImageGptQuality>;
    backgrounds: Array<OpenAiImageGptBackground>;
}
export enum OpenAiImageGptFormat {
    PNG = 'png',
    JPEG = 'jpeg',
    WEBP = 'webp',
}

export enum OpenAiImageGptModeration {
    AUTO = 'auto',
    LOW = 'low',
}

export enum OpenAiImageGptInputFidelity {
    LOW = 'low',
    HIGH = 'high',
}
