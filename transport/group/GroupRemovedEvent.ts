import { TransportEvent } from "@ts-core/common";
import { IGroupEventDto } from "./IGroupEventDto";

export class GroupRemovedEvent extends TransportEvent<IGroupEventDto> {
    public static readonly NAME = 'GroupRemovedEvent';

    constructor(data: IGroupEventDto) {
        super(GroupRemovedEvent.NAME, data);
    }
}
