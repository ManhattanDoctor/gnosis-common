import { ITraceable } from '@ts-core/common';
import { IOpenIdResourceScopePermissionOptions } from '@ts-core/openid-common';
import { UserToken } from '../../user';

export interface IUserTokenEditDto extends ITraceable {
    id: number;
    name?: string;
    expired?: Date;
    permissions?: Array<IOpenIdResourceScopePermissionOptions>;
}

export type IUserTokenEditDtoResponse = UserToken;
