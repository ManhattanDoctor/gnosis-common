import { IPaginable, IPagination } from '@ts-core/common';
export interface IFileTag { tag: string; count: number; }
export interface IFileTagListDto extends IPaginable<IFileTag> { search?: string; }
export interface IFileTagListDtoResponse extends IPagination<IFileTag> { }
