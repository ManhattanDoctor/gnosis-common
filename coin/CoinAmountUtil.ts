import { ICoinRate } from './CoinRate';
import { MathUtil } from '@ts-core/common';
import { CoinId, ICoinAmount } from './CoinId';

/** Складывает суммы только в пределах одной валюты */
export class CoinAmountUtil {

    //--------------------------------------------------------------------------
    //
    //  Static Methods
    //
    //--------------------------------------------------------------------------

    public static merge(items: Array<ICoinAmount>): Array<ICoinAmount> {
        let amounts = new Map<CoinId, string>();
        for (let item of items) {
            amounts.set(item.coinId, MathUtil.add(amounts.get(item.coinId) || '0', item.amount));
        }
        return Array.from(amounts, ([coinId, amount]) => ({ amount, coinId }));
    }

    /** Пересчёт по сохранённым курсам; отсутствие курса не маскируется нулём */
    public static convert(items: Array<ICoinAmount>, rates: Array<ICoinRate>, coinId: CoinId): ICoinAmount {
        let amount = '0';
        for (let item of items) {
            let value = item.amount;
            if (item.coinId !== coinId && value !== '0') {
                let rate = rates.find(rate => rate.from === item.coinId && rate.to === coinId);
                if (!rate) {
                    throw new Error(`Coin rate is missing: ${item.coinId}:${coinId}`);
                }
                value = MathUtil.multiply(value, rate.value);
            }
            amount = MathUtil.add(amount, value);
        }
        return { amount, coinId };
    }

    /** Старые проводки позволяют восстановить курс, если иностранная валюта ровно одна */
    public static inferRates(items: Array<ICoinAmount>, billed: ICoinAmount): Array<ICoinRate> {
        let amounts = this.merge(items);
        let foreign = amounts.filter(item => item.coinId !== billed.coinId && MathUtil.greaterThan(item.amount, '0'));
        if (foreign.length !== 1) {
            return new Array();
        }
        let local = amounts.find(item => item.coinId === billed.coinId);
        let converted = MathUtil.subtract(billed.amount, local ? local.amount : '0');
        if (!MathUtil.greaterThan(converted, '0')) {
            return new Array();
        }
        return [{ from: foreign[0].coinId, to: billed.coinId, value: MathUtil.divide(converted, foreign[0].amount) }];
    }

}
