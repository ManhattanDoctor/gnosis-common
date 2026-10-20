import { IKeycloakSettings } from '@ts-core/openid-common';

export interface IConfigGetDtoResponse {
    keycloak: IKeycloakSettings;
}
