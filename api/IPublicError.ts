import { IAiModelValidationDetails } from './ErrorCode';

/** Публичная ошибка выполнения без внутренних данных запроса. */
export interface IPublicError {
    code: string;
    message: string;
    details?: IAiVendorErrorDetails | IAiModelValidationDetails | string;
}

export enum AiVendorErrorCode {
    IMAGE_RESULT_EMPTY = 'IMAGE_RESULT_EMPTY',
    IMAGE_SETTINGS_UNSUPPORTED = 'IMAGE_SETTINGS_UNSUPPORTED',
    INPUT_IMAGE_TOO_SMALL = 'INPUT_IMAGE_TOO_SMALL',
    PROMPT_TOO_LONG = 'PROMPT_TOO_LONG',
    CONTENT_MODERATION = 'CONTENT_MODERATION',
    VIDEO_CONTENT_MODERATION = 'VIDEO_CONTENT_MODERATION',
    ADULT_CONTENT_RESTRICTED = 'ADULT_CONTENT_RESTRICTED',
    CONTENT_SIMILARITY = 'CONTENT_SIMILARITY',
    PROVIDER_QUOTA_EXCEEDED = 'PROVIDER_QUOTA_EXCEEDED',
    PROVIDER_RATE_LIMITED = 'PROVIDER_RATE_LIMITED',
    PROVIDER_TIMEOUT = 'PROVIDER_TIMEOUT',
    PROVIDER_ACCESS_DENIED = 'PROVIDER_ACCESS_DENIED',
    PROVIDER_UNAVAILABLE = 'PROVIDER_UNAVAILABLE',
    PROVIDER_ERROR = 'PROVIDER_ERROR'
}

export interface IAiVendorErrorDiagnostics {
    requestId?: string;
    generationId?: string;
    provider?: string;
    providerCode?: string | number;
    finishReason?: string;
    blockReason?: string;
    blockedCategories?: Array<string>;
}

export interface IAiVendorErrorDetails extends IAiVendorErrorDiagnostics {
    code: AiVendorErrorCode;
    message?: string;
    status?: number;
    maxPromptCharacters?: number;
    minReferenceSidePixels?: number;
}
