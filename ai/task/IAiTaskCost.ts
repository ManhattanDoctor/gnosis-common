import { IAiPendingCost } from './IAiPendingCost';
import { ICoinAmount } from '../../coin';

/** Состояние расчёта фактической стоимости задачи */
export enum AiTaskCostStatus {
    /** Провайдер ещё не сообщил фактическую стоимость */
    PENDING = 'PENDING',
    /** Стоимость рассчитана и больше не изменится */
    FINAL = 'FINAL',
    /** Цена неизвестна, автоматическое уточнение недоступно */
    UNAVAILABLE = 'UNAVAILABLE'
}

/** Стоимость выполнения задачи и валюта, в которой рассчитана сумма */
export interface IAiTaskCost {
    /** Расходы, стоимость которых ещё ожидается */
    pending?: Array<IAiPendingCost>;
    amounts: Array<ICoinAmount>;
    status: AiTaskCostStatus;
}
