import { Type } from 'class-transformer';
import { ApiProperty, ApiPropertyOptional } from '@ts-core/swagger';
import { GroupLimitPeriod } from './GroupLimitPeriod';

/**
 * Роль участника в группе. `ADMIN` управляет группой наравне с владельцем
 * (пополняет бюджет, добавляет участников, ставит лимиты); `MEMBER` только
 * тратит бюджет. У группы может быть несколько администраторов.
 */
export enum GroupMemberRole {
    ADMIN = 'ADMIN',
    MEMBER = 'MEMBER',
}

/**
 * Членство пользователя в группе. Связь «многие-ко-многим»: один человек состоит
 * в нескольких группах, у каждого членства своя роль и свой лимит. Запись создаёт
 * администратор группы напрямую — без приглашения и согласия участника (членство
 * даёт только привилегию тратить бюджет группы, ничего не отнимая).
 *
 * `limit` — предел расхода участника из бюджета группы, в рублях, в пределах
 * одного окна `limitPeriod`. `null` — без индивидуального лимита (ограничивает
 * только остаток группы). С началом нового периода отсчёт начинается заново.
 */
export class GroupMember {
    @ApiProperty({ description: 'Group member ID' })
    id: number;

    @ApiProperty({ description: 'Group ID' })
    groupId: number;

    @ApiProperty({ description: 'Member user ID' })
    userId: number;

    @ApiProperty({ description: 'Member role', enum: GroupMemberRole })
    role: GroupMemberRole;

    @ApiPropertyOptional({ description: 'Member spending limit in rubles per period, null — unlimited' })
    limit?: string;

    @ApiPropertyOptional({ description: 'Limit period: how often the limit resets', enum: GroupLimitPeriod })
    limitPeriod?: GroupLimitPeriod;

    @ApiProperty({ description: 'Creation date', type: Date })
    @Type(() => Date)
    createdDate: Date;
}
