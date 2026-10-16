import { ITraceable } from '@ts-core/common';

/** Источник пополнения бюджета группы */
export enum GroupBudgetSource {
    // Начисление администратором инстанса извне (личные балансы не трогаются)
    EXTERNAL = 'EXTERNAL',
    // Перевод администратором группы со своего личного баланса
    PERSONAL = 'PERSONAL',
}

/**
 * Пополнение кошелька группы. `amount` — сумма в рублях. `source` выбирает путь:
 * начисление извне (только администратор инстанса) либо перевод со своего
 * личного баланса (администратор группы, у него должно хватать средств).
 */
export interface IGroupBudgetAddDto extends ITraceable {
    groupId: number;
    amount: string;
    source: GroupBudgetSource;
}
