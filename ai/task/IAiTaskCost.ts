/** Состояние расчёта фактической стоимости задачи */
export enum AiTaskCostStatus {
    /** Провайдер ещё не сообщил фактическую стоимость */
    PENDING = 'PENDING',
    /** Стоимость рассчитана и больше не изменится */
    FINAL = 'FINAL'
}

/** Стоимость выполнения задачи в валюте биллинга проекта (RUB) */
export interface IAiTaskCost {
    value?: string;
    status: AiTaskCostStatus;
}
