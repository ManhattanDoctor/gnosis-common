import { IOpenIdResourceScopePermissionOptions } from '@ts-core/openid-common';
import { ITraceable } from '@ts-core/common';
import { UserToken } from '../../user';

export interface IUserTokenAddDto extends ITraceable {
    name?: string;
    expired: Date;
    permissions: Array<IOpenIdResourceScopePermissionOptions>;
}

export type IUserTokenAddDtoResponse = UserToken;
