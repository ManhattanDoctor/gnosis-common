import { TransportEvent } from "@ts-core/common";
import { IGroupGetDtoResponse } from "../../api/group";
import { IGroupEventDto } from "./IGroupEventDto";

export class GroupChangedEvent extends TransportEvent<IGroupChangedEventDto> {
    public static readonly NAME = 'GroupChangedEvent';

    constructor(data: IGroupChangedEventDto) {
        super(GroupChangedEvent.NAME, data);
    }
}

export interface IGroupChangedEventDto extends IGroupEventDto {
    item: Partial<IGroupGetDtoResponse>;
}
