import { FileMime } from './File';

export enum FileReferenceType {
    FILE = 'FILE',
    URL = 'URL',
}

/** FILE uses a stored file ID; URL is passed to the provider without importing it. */
export interface IFileReference {
    type: FileReferenceType;
    id?: number;
    url?: string;
    mime?: FileMime;
}
