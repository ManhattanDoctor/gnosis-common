import { ITraceable } from '@ts-core/common';
import { LoginResource } from './LoginResource';
import { IOpenIdTokenRefreshable } from '@ts-core/openid-common';

export interface IOAuthDto {
    codeOrToken: string;
    redirectUri: string;
}

export interface IEthSignatureDto {
    address: string;
    signature: string;
}

export interface ILoginDto<T extends LoginData = LoginData> extends ITraceable {
    data: T;
    resource: LoginResource;
}

export interface ILoginDtoResponse {
    token: IOpenIdTokenRefreshable;
}

export interface ITelegramMiniAppLoginDto {
    initData: string;
}

export type LoginData = IOAuthDto | ITelegramMiniAppLoginDto;
