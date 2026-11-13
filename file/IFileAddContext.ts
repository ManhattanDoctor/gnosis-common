import { IFileGeneration, FileGenerationDto } from './IFileGeneration';
import { ApiPropertyOptional } from '@ts-core/swagger';

/** Defaults for newly created results. Undefined inherits; null directory means root; [] clears tags. */
export interface IFileOutputSettings {
    directory?: string | null;
    tags?: Array<string>;
}

export enum FileOriginKind {
    UPLOAD = 'UPLOAD',
    GENERATION = 'GENERATION',
    PROCESSING = 'PROCESSING',
}

/** Immutable creation provenance. IDs remain historical references if a source is deleted. */
export interface IFileOrigin {
    kind: FileOriginKind;
    generation?: IFileGeneration;
    operationId?: string;
    directoryFallback?: boolean;
    sourceFileIds?: Array<number>;
}

export interface IFileAddContext extends IFileOutputSettings {
    /** Internal file reservation, persisted with a background job; not a public input. */
    reservationId?: string;
    /** Читаемое имя результата; не является ключом объекта в хранилище. */
    name?: string;
    origin?: IFileOrigin;
}

export class FileOutputSettingsDto implements IFileOutputSettings {
    @ApiPropertyOptional({ type: String, nullable: true, description: 'UID directory path; null means root' })
    public directory?: string | null;

    @ApiPropertyOptional({ type: [String], description: 'Tags for new results; an empty array means no tags' })
    public tags?: Array<string>;
}

export class FileOriginDto implements IFileOrigin {
    @ApiPropertyOptional({ type: FileGenerationDto, description: 'Immutable validated request for this generated file; absent on older files' })
    public generation?: IFileGeneration;

    @ApiPropertyOptional({ description: 'Requested folder disappeared; generated result was saved in root' })
    public directoryFallback?: boolean;

    @ApiPropertyOptional({ enum: FileOriginKind })
    public kind: FileOriginKind;

    @ApiPropertyOptional({ description: 'Creation operation identifier' })
    public operationId?: string;

    @ApiPropertyOptional({ type: [Number], description: 'Historical input file identifiers' })
    public sourceFileIds?: Array<number>;
}
