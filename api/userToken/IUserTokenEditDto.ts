import { UserToken } from '../../user';

export interface IUserTokenEditDto extends Partial<UserToken> {
    id: number;
    name?: string;
}

export type IUserTokenEditDtoResponse = UserToken;
