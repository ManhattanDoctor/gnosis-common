import { Type } from 'class-transformer';
import { CoinId } from '../coin';
import { ApiProperty } from '@ts-core/swagger';

export const GROUP_NAME_MIN_LENGTH = 3;
export const GROUP_NAME_MAX_LENGTH = 256;

/**
 * Группа — держатель общего кошелька организации. `ownerId` — создатель и
 * суперадминистратор (его членство удалить нельзя). Управлять группой —
 * пополнять бюджет, добавлять участников, назначать лимиты — могут все участники
 * с ролью `GroupMemberRole.ADMIN`, которых может быть несколько. Баланс группы
 * считается как сумма проводок по счёту `GR-00` (см. PaymentAccountId) с фильтром
 * по `id` группы — отдельного поля баланса нет.
 */
export class Group {
    @ApiProperty({ description: 'Group ID' })
    id: number;

    @ApiProperty({ description: 'Group name' })
    name: string;

    @ApiProperty({ description: 'Owner (creator, super-admin) user ID' })
    ownerId: number;

    @ApiProperty({ description: 'Coin type', enum: CoinId })
    coinId: CoinId;

    @ApiProperty({ description: 'Creation date', type: Date })
    @Type(() => Date)
    createdDate: Date;
}
