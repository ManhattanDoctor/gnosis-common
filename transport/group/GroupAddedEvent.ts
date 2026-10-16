import { TransportEvent } from "@ts-core/common";
import { IGroupGetDtoResponse } from "../../api/group";

export class GroupAddedEvent extends TransportEvent<IGroupGetDtoResponse> {
    public static readonly NAME = 'GroupAddedEvent';

    constructor(data: IGroupGetDtoResponse) {
        super(GroupAddedEvent.NAME, data);
    }
}
