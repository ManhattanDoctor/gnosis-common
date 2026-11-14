import { IFileReference } from '../file/IFileReference';
import { AiImageModel, AiModelImageOptions } from './AiImageModel';
import { IAiImageTask } from './task/IAiImageTask';

export interface IImageToolRequest {
    model: AiImageModel;
    task: IAiImageTask;
    options: AiModelImageOptions;
}

export interface IImageToolDto {
    references?: Array<IFileReference>;
    request: Omit<IImageToolRequest, 'task'> & { task: Omit<IAiImageTask, 'fileIds' | 'references'> };
    isDrawNew?: boolean;
    name?: string;
    directory?: string;
}
