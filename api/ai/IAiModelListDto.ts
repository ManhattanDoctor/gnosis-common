import { IPaginable, IPagination } from '@ts-core/common';
import { AiModelRecord, IAiModelDescription } from '../../ai';

export interface IAiModelListDto extends IPaginable<AiModelRecord> { }
export interface IAiModelListDtoResponse extends IPagination<IAiModelDescription> { }
