import { ITraceable } from '@ts-core/common';
import { LoginResource } from './LoginResource';
import { TgUser } from '@ts-core/oauth';

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
    sid: string;
    // Keycloak id_token для id_token_hint при logout (тихий выход без экрана подтверждения)
    idToken?: string;
}

export type LoginData = IOAuthDto | TgUser | IEthSignatureDto;