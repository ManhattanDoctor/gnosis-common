import { TransportEvent } from "@ts-core/common";
import { UserToken } from "../../user";

export class UserTokenAddedEvent extends TransportEvent<UserToken> {
    // --------------------------------------------------------------------------
    //
    //  Public Static Properties
    //
    // --------------------------------------------------------------------------

    public static readonly NAME = 'UserTokenAddedEvent';

    // --------------------------------------------------------------------------
    //
    //  Constructor
    //
    // --------------------------------------------------------------------------

    constructor(data: UserToken) {
        super(UserTokenAddedEvent.NAME, data);
    }
}
