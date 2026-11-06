import { MathUtil } from '@ts-core/common';
import * as _ from 'lodash';

/** Денежные значения остаются десятичными строками на всех границах. */
export class GroupAmountUtil {
    //--------------------------------------------------------------------------
    //
    //  Constants
    //
    //--------------------------------------------------------------------------

    public static readonly PATTERN = /^\d+(?:\.\d+)?$/;
    public static readonly POSITIVE_PATTERN = /^(?=.*[1-9])\d+(?:\.\d+)?$/;
    public static readonly MAX_LENGTH = 128;

    //--------------------------------------------------------------------------
    //
    //  Public Static Methods
    //
    //--------------------------------------------------------------------------

    public static isValid(value: string, isZeroAllowed: boolean = false): boolean {
        return _.isString(value) && value.length <= this.MAX_LENGTH && this.PATTERN.test(value)
            && (isZeroAllowed || MathUtil.greaterThan(value, '0'));
    }
}
