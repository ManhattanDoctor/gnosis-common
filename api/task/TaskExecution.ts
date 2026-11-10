import { Type } from 'class-transformer';
import { ITaskModel } from './ITaskDto';

export class TaskExecution {
    // --------------------------------------------------------------------------
    //
    //  Properties
    //
    // --------------------------------------------------------------------------

    public id: string;
    public parentTaskId?: string;
    public session?: string;
    public model: ITaskModel;
    public sourceFileIds?: Array<number>;

    @Type(() => Date)
    public createdDate: Date;
}

export enum TaskExecutionResult {
    COMPLETED = 'COMPLETED',
    FAILED = 'FAILED',
    CANCELLED = 'CANCELLED'
}
