import type { IConversationRequestSettings } from '../api/conversation/IConversationMessageDto';
import { File, IFileReference } from '../file';
import { Type } from 'class-transformer';
import * as _ from 'lodash';
import { Conversation } from './Conversation';
import { ApiProperty, ApiPropertyOptional } from '@ts-core/swagger';

export enum ConversationMessageRole {
    USER = 'USER',
    COMMAND = 'COMMAND',
    ASSISTANT = 'ASSISTANT',
}

export class ConversationMessage {
    @ApiProperty({ description: 'Message ID' })
    id: number;

    @ApiProperty({ description: 'Message role', enum: ConversationMessageRole })
    role: ConversationMessageRole;

    conversation: Conversation;

    @ApiProperty({ description: 'Conversation ID' })
    conversationId: number;

    @ApiPropertyOptional({ description: 'Message text content' })
    text?: string;

    @ApiPropertyOptional({ description: 'Attached files', type: [File] })
    @Type(() => File)
    files?: Array<File>;

    @ApiPropertyOptional({ description: 'Ordered input references; absent on legacy messages' })
    references?: Array<IFileReference>;

    @ApiPropertyOptional({ description: 'Settings used for this message' })
    settings?: IConversationRequestSettings;

    @ApiProperty({ description: 'Creation date', type: Date })
    @Type(() => Date)
    createdDate: Date;
}


export const CONVERSATION_MESSAGE_TEXT_MIN_LENGTH = 1;
export const CONVERSATION_MESSAGE_TEXT_MAX_LENGTH = 131136;
