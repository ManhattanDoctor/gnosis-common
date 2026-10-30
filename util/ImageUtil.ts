import { Sha512 } from "@ts-core/common";
import * as _ from "lodash";

export class ImageUtil {

    // --------------------------------------------------------------------------
    //
    //  Static Methods
    //
    // --------------------------------------------------------------------------

    public static getAvatar(name: string, extension?: string): string {
        if (_.isNil(extension)) {
            extension = 'svg';
        }
        let seed = Sha512.hex(name).substring(0, 32);
        return `https://api.dicebear.com/9.x/avataaars/${extension}?seed=${seed}`
    }

    public static getSize(size: string): IImageSize {
        let items = /^(\d+)x(\d+)$/.exec(size || '');
        return items ? { width: Number(items[1]), height: Number(items[2]) } : { width: 0, height: 0 };
    }
}

export interface IImageSize {
    width: number;
    height: number;
}