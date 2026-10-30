import { AiModelOptions } from './AiModel';
import { IAiModelReference } from './IAiModelDescription';

/** Строковый идентификатор поддерживается для ранее сохранённых подключений. */
export type AiToolConnection = string | IAiToolConnection;

export interface IAiToolConnection {
    uid: string;
    settings?: IAiToolSettings;
}

export interface IAiToolSettings {
    model: IAiModelReference;
    options?: Partial<AiModelOptions>;
}
