import { ApiProperty, ApiPropertyOptional } from '@ts-core/swagger';
import type { IAiModelReference } from '../ai/IAiModelDescription';

/** Validated generation request, not a claim that the provider fulfilled every option. */
export interface IFileGeneration {
    model: IAiModelReference;
    prompt: string;
    options: Record<string, unknown>;
    maskFileId?: number;
}

export class FileGenerationDto implements IFileGeneration {
    @ApiProperty({ type: 'object', properties: { provider: { type: 'string' }, model: { type: 'string' } }, required: ['provider', 'model'] })
    public model: IAiModelReference;

    @ApiProperty({ description: 'Prompt of the validated generation request' })
    public prompt: string;

    @ApiProperty({ type: 'object', additionalProperties: true, description: 'Validated public model options; excludes runtime, billing and reference URLs' })
    public options: Record<string, unknown>;

    @ApiPropertyOptional({ description: 'Mask input, separate from regular references' })
    public maskFileId?: number;
}
