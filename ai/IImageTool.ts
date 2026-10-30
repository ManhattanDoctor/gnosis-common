import { AiImageModel, AiModelImageOptions } from './AiImageModel';
import { IAiImageTask } from './task/IAiImageTask';

export interface IImageToolRequest {
    model: AiImageModel;
    task: IAiImageTask;
    options: AiModelImageOptions;
}

export interface IImageToolDto {
    request: IImageToolRequest;
    isDrawNew?: boolean;
    name?: string;
    directory?: string;
}
