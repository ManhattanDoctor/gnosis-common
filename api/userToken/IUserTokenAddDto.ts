import { ITraceable } from '@ts-core/common';
import { UserToken } from '../../user';

export interface IUserTokenAddDto extends ITraceable {
    name?: string;
    expired?: Date;
}

export type IUserTokenAddDtoResponse = UserToken;
