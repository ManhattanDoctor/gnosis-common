import { IOpenIdResourceScopePermissionOptions } from '@ts-core/openid-common';
import { Type } from 'class-transformer';
import { ApiProperty, ApiPropertyOptional } from '@ts-core/swagger';

export class UserToken {
    // --------------------------------------------------------------------------
    //
    //  Properties
    //
    // --------------------------------------------------------------------------

    @ApiProperty({ description: 'Token ID' })
    public id: number;
    @ApiProperty({ description: 'Token value' })
    public value: string;

    @ApiPropertyOptional({ description: 'Token label' })
    public name?: string;
    @ApiPropertyOptional({ description: 'Owner user ID' })
    public userId?: number;
    @ApiProperty({ description: 'Token expiration date', type: Date })
    @Type(() => Date)
    public expired: Date;

    @ApiProperty({ type: 'array', items: { type: 'object' } })
    public permissions: Array<IOpenIdResourceScopePermissionOptions>;

    @ApiProperty({ description: 'Creation date', type: Date })
    @Type(() => Date)
    public createdDate: Date;
}

export const USER_TOKEN_NAME_MIN_LENGTH = 1;
export const USER_TOKEN_NAME_MAX_LENGTH = 256;
