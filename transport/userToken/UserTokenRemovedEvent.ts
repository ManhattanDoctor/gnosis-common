import { TransportEvent } from "@ts-core/common";
import { IUserTokenEventDto } from "./IUserTokenEventDto";

export class UserTokenRemovedEvent extends TransportEvent<IUserTokenEventDto> {
    // --------------------------------------------------------------------------
    //
    //  Public Static Properties
    //
    // --------------------------------------------------------------------------

    public static readonly NAME = 'UserTokenRemovedEvent';

    // --------------------------------------------------------------------------
    //
    //  Constructor
    //
    // --------------------------------------------------------------------------

    constructor(data: IUserTokenEventDto) {
        super(UserTokenRemovedEvent.NAME, data);
    }
}
