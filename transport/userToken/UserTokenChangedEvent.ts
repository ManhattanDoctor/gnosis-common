import { TransportEvent } from "@ts-core/common";
import { UserToken } from "../../user";
import { IUserTokenEventDto } from "./IUserTokenEventDto";

export class UserTokenChangedEvent extends TransportEvent<IUserTokenChangedEventDto> {
    // --------------------------------------------------------------------------
    //
    //  Public Static Properties
    //
    // --------------------------------------------------------------------------

    public static readonly NAME = 'UserTokenChangedEvent';

    // --------------------------------------------------------------------------
    //
    //  Constructor
    //
    // --------------------------------------------------------------------------

    constructor(data: IUserTokenChangedEventDto) {
        super(UserTokenChangedEvent.NAME, data);
    }
}

export interface IUserTokenChangedEventDto extends IUserTokenEventDto {
    item: Partial<UserToken>;
}
