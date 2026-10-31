export interface IAiTextResponse {
    role: string;
    content: string;
    data?: Record<string, unknown>;
    files?: Array<number>;
}