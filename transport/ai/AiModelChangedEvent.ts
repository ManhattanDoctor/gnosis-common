import { TransportEvent } from '@ts-core/common';
import { AiModelRecord, AiModelStatus, IAiModelReference } from '../../ai';

export interface IAiModelChangedEvent {
    id: number;
    reference: IAiModelReference;
    name: string;
    status: AiModelStatus;
    sortOrder: number;
}

/** Public catalogue metadata only. Provider tariffs must never be broadcast to clients. */
export class AiModelChangedEvent extends TransportEvent<IAiModelChangedEvent> {
    public static readonly NAME = 'AiModelChangedEvent';
    public constructor(item: AiModelRecord) {
        super(AiModelChangedEvent.NAME, {
            id: item.id, reference: { provider: item.provider, model: item.model },
            name: item.name, status: item.status, sortOrder: item.sortOrder
        });
    }
}
