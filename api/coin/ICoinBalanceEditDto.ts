import { CoinId } from '../../coin';
import { ITraceable } from '@ts-core/common';

export const COIN_CORRECTION_REASON_MAX_LENGTH = 500;

export interface ICoinBalanceEditDto extends ITraceable {
    userId: number;
    coinId: CoinId;
    amount: string;
    reason?: string;
}

