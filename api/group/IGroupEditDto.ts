import { ITraceable } from '@ts-core/common';
import { Group } from '../../group';

export interface IGroupEditDto extends ITraceable {
    id: number;
    name?: string;
}

export type IGroupEditDtoResponse = Group;
