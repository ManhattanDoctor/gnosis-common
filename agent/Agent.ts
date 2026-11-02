import { IPreview, PreviewDto } from '../preview';
import { AiToolConnection } from '../ai/IAiToolConnection';
import { Type } from 'class-transformer';
import { User } from '../user';
import { AiTextModel, AiModelTextOptions } from '../ai';
import { ApiProperty, ApiPropertyOptional } from '@ts-core/swagger';

export class Agent {
    @ApiPropertyOptional({ type: PreviewDto, description: 'Optional derived preview; absent until available or scheduled' })
    @Type(() => PreviewDto)
    public preview?: IPreview;

    @ApiPropertyOptional({ description: 'File selected as the cover', nullable: true })
    public previewFileId?: number;

    // --------------------------------------------------------------------------
    //
    //  Properties
    //
    // --------------------------------------------------------------------------

    @ApiProperty({ description: 'Agent ID' })
    public id: number;
    @ApiProperty({ description: 'Agent name' })
    public name: string;
    @ApiProperty({ description: 'Owner user ID' })
    public userId: number;
    @ApiProperty({ description: 'Text model', enum: AiTextModel })
    public model: AiTextModel;
    @ApiProperty({ description: 'Options of the text model', type: Object })
    public options: AiModelTextOptions;

    @ApiPropertyOptional({ description: 'System prompt' })
    public system?: string;
    @ApiPropertyOptional({ description: 'Agent description' })
    public description?: string;
    /** Either an AiToolType value or an mcp server uid */
    @ApiPropertyOptional({ description: 'Tools: AiToolType values or MCP server UIDs', type: [String] })
    public tools?: Array<AiToolConnection>;

    public user?: User;

    @ApiProperty({ description: 'Creation date', type: Date })
    @Type(() => Date)
    public createdDate: Date;

    @ApiPropertyOptional({ description: 'Last update date', type: Date })
    @Type(() => Date)
    public updatedDate?: Date;
}

export const AGENT_NAME_MIN_LENGTH = 3;
export const AGENT_NAME_MAX_LENGTH = 256;

export const AGENT_SYSTEM_MAX_LENGTH = 16384;
export const AGENT_DESCRIPTION_MAX_LENGTH = 1024;
