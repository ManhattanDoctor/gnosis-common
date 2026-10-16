import { ApiProperty } from '@ts-core/swagger';

/** Вид кошелька, из которого оплачивается задача или прогон графа */
export enum PayerType {
    USER = 'USER',
    GROUP = 'GROUP',
}

/**
 * Плательщик — явный источник средств, выбранный при запуске инструмента.
 * `USER` + `id` пользователя — личный баланс (счёт PR-00); `GROUP` + `id`
 * группы — кошелёк группы (счёт GR-00). Если плательщик не задан, расход идёт
 * с личного баланса инициатора (поведение по умолчанию, как было до групп).
 */
export class Payer implements IPayer {
    @ApiProperty({ description: 'Payer type', enum: PayerType })
    type: PayerType;

    @ApiProperty({ description: 'Payer ID: user ID for USER, group ID for GROUP' })
    id: number;
}

export interface IPayer {
    type: PayerType;
    id: number;
}
