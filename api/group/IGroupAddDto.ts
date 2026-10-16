import { ITraceable } from '@ts-core/common';
import { Group } from '../../group';
import { CoinId } from '../../coin';

export interface IGroupAddDto extends ITraceable {
    name: string;
    coinId?: CoinId;
}

export type IGroupAddDtoResponse = Group;
