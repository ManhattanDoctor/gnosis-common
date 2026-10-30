import { TransportEvent } from '@ts-core/common';

/** Стоимость графа уточнена после ответа провайдера */
export class AgentGraphRunCostChangedEvent extends TransportEvent<{ session: string }> {
    // --------------------------------------------------------------------------
    //
    //  Static Properties
    //
    // --------------------------------------------------------------------------

    public static readonly NAME = 'AgentGraphRunCostChangedEvent';

    // --------------------------------------------------------------------------
    //
    //  Constructor
    //
    // --------------------------------------------------------------------------

    public constructor(data: { session: string }) {
        super(AgentGraphRunCostChangedEvent.NAME, data);
    }
}
