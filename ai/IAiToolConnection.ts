import { AiModelOptions } from './AiModel';
import { IAiModelReference } from './IAiModelDescription';

/** Строковый идентификатор поддерживается для ранее сохранённых подключений. */
export type AiToolConnection = string | IAiToolConnection;

export interface IAiToolConnection {
    uid: string;
    /** Обязательный однократный вызов только в settings.tools сообщения. */
    isRequired?: boolean;
    settings?: IAiToolSettings;
}

export interface IAiToolSettings {
    model: IAiModelReference;
    options?: Partial<AiModelOptions>;
    isLockSelection?: boolean;
}
