import { IGroupGetDtoResponse } from './IGroupGetDtoResponse';

/**
 * Список групп, доступных пользователю для оплаты: где он владелец либо
 * участник. Каждая — с остатком бюджета (и членством/лимитом, если участник).
 * Используется при выборе кошелька в момент запуска инструмента.
 */
export type IGroupListDtoResponse = Array<IGroupGetDtoResponse>;
