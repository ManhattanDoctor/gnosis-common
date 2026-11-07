import { AiModelRecord } from '../../ai';
import { IPaginable, IPagination } from '@ts-core/common';
export interface IAiModelEditDto extends Partial<Pick<AiModelRecord, 'name' | 'status' | 'sortOrder' | 'price'>> { id: number; }
export interface IAiModelRecordListDto extends IPaginable<AiModelRecord> { }
export interface IAiModelRecordListDtoResponse extends IPagination<AiModelRecord> { }
