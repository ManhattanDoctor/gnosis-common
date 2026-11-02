import { TransportEvent } from '@ts-core/common';
import { IFileEventDto } from './IFileEventDto';

export class FilePreviewChangedEvent extends TransportEvent<IFileEventDto> {
    public static readonly NAME = 'FilePreviewChangedEvent';
    constructor(data: IFileEventDto) { super(FilePreviewChangedEvent.NAME, data); }
}
