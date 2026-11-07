import { Type } from 'class-transformer';
import { AiModel } from './AiModel';
import { AiModelStatus } from './AiModelStatus';
import { AiPriceValue, IAiPriceTokens } from './AiPrice';
import { CoinId } from '../coin';

/** Tariff units and calculation remain properties of the adapter. Decimal amounts are strings. */
export interface AiModelPrice {
    coinId: CoinId;
    value: AiPriceValue | IAiPriceTokens | string;
}

/** One concrete model through one Gnosis adapter. Provider credentials never belong here. */
export class AiModelRecord {
    public id: number;
    public provider: AiModel;
    public model: string;
    public name: string;
    public status: AiModelStatus;
    public sortOrder: number;
    public price?: AiModelPrice;

    @Type(() => Date)
    public createdDate: Date;

    @Type(() => Date)
    public updatedDate?: Date;
}
