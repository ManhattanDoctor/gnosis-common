import { IPublicError } from '../api/IPublicError';
import { ApiProperty } from '@ts-core/swagger';

/** Public error of the latest execution; contains no raw provider payload or stack. */
export class ConversationError implements IPublicError {
    @ApiProperty({ description: 'Public error code' })
    public code: string;

    @ApiProperty({ description: 'Safe reason for the failed execution' })
    public message: string;
}
