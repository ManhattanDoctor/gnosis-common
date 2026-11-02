import { Type } from 'class-transformer';
import { ApiProperty, ApiPropertyOptional } from '@ts-core/swagger';

export enum PreviewStatus {
    PENDING = 'PENDING',
    PROCESSING = 'PROCESSING',
    READY = 'READY',
    FAILED = 'FAILED'
}

export enum PreviewMode {
    AUTO = 'AUTO',
    MANUAL = 'MANUAL',
    NONE = 'NONE'
}

export interface IPreviewMediaDetails {
    mime: string;
    size: number;
    width: number;
    height: number;
    duration?: number;
}

export interface IReadyPreviewMedia extends IPreviewMediaDetails {
    status: PreviewStatus.READY;
    url: string;
}

export interface IPendingPreviewMedia {
    status: PreviewStatus.PENDING | PreviewStatus.PROCESSING | PreviewStatus.FAILED;
}

export type IPreviewMedia = IReadyPreviewMedia | IPendingPreviewMedia;

export interface IPreview {
    image?: IPreviewMedia;
    video?: IPreviewMedia;
}

export interface IHasPreview {
    preview?: IPreview;
}

/** Runtime Swagger schema; domain code uses the discriminated IPreviewMedia union. */
export class PreviewMediaDto {
    @ApiProperty({ enum: PreviewStatus })
    public status: PreviewStatus;

    @ApiPropertyOptional({ description: 'Available only when status is READY' })
    public url?: string;

    @ApiPropertyOptional()
    public mime?: string;

    @ApiPropertyOptional({ description: 'Size in bytes' })
    public size?: number;

    @ApiPropertyOptional()
    public width?: number;

    @ApiPropertyOptional()
    public height?: number;

    @ApiPropertyOptional({ description: 'Duration in seconds; video only' })
    public duration?: number;
}

export class PreviewDto {
    @ApiPropertyOptional({ type: PreviewMediaDto })
    @Type(() => PreviewMediaDto)
    public image?: PreviewMediaDto;

    @ApiPropertyOptional({ type: PreviewMediaDto })
    @Type(() => PreviewMediaDto)
    public video?: PreviewMediaDto;
}
