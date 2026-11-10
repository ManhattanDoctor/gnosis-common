import { TaskExecution, TaskExecutionResult } from '../../api/task';

export interface ITaskEventDto {
    session: string;
    /** Отсутствует у старых событий прогресса и завершения. */
    id?: string;
    parentTaskId?: string;
    item?: TaskExecution;
    result?: TaskExecutionResult;
    fileIds?: Array<number>;
    error?: { code: string; message: string };
}
