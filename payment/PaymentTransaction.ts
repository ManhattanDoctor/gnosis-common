import { Type, Transform } from 'class-transformer';
import { CoinId, ICoinAmount } from '../coin';
import { AiModel } from '../ai';
import { AiModelConsumption } from '../ai';
import { AiModelOptions } from '../ai';
import { ApiProperty, ApiPropertyOptional } from '@ts-core/swagger';

export enum PaymentAccountId {
    CO_00 = 'CO-00', // Счет компании
    AG_00 = 'AG-00', // Счет аггрегатора
    PR_00 = 'PR-00', // Персональный счет клиента
    GR_00 = 'GR-00', // Счет группы (общий кошелёк организации)
}

export enum PaymentTransactionItemType {
    CONVERSATION = 'CONVERSATION_MESSAGE'
}

export enum PaymentTransactionType {
    REFUND = 'REFUND',
    PURCHASE = 'PURCHASE',
    CORRECTION = 'CORRECTION',
    TOOL_PURCHASE = 'TOOL_PURCHASE',
    TASK_PURCHASE = 'TASK_PURCHASE',
    AGENT_PURCHASE = 'AGENT_PURCHASE',

    REGISTRATION_BONUS = 'REGISTRATION_BONUS',

    // Проводки по кошельку группы (счёт GR-00). Расход — зеркало личного
    // (debet CO-00, credit GR-00). Пополнение двумя путями:
    //   GROUP_TOP_UP — начисление администратором инстанса извне
    //     (debet GR-00, credit CO-00, личные балансы не трогаются);
    //   GROUP_TOP_UP_PERSONAL — перевод администратором группы со своего
    //     личного баланса (debet GR-00, credit PR-00, списывает с PR-00).
    GROUP_TOP_UP = 'GROUP_TOP_UP',
    GROUP_TOP_UP_PERSONAL = 'GROUP_TOP_UP_PERSONAL',
    GROUP_TOOL_PURCHASE = 'GROUP_TOOL_PURCHASE',
    GROUP_TASK_PURCHASE = 'GROUP_TASK_PURCHASE',
    GROUP_AGENT_PURCHASE = 'GROUP_AGENT_PURCHASE',
}

export class PaymentTransaction implements ICoinAmount {
    @ApiProperty({ description: 'Transaction ID' })
    id: number;

    @ApiProperty({ description: 'Transaction type', enum: PaymentTransactionType })
    type: PaymentTransactionType;

    @ApiProperty({ description: 'Debit account', enum: PaymentAccountId })
    debet: PaymentAccountId;

    @ApiProperty({ description: 'Credit account', enum: PaymentAccountId })
    credit: PaymentAccountId;

    @ApiProperty({ description: 'Transaction amount' })
    amount: string;

    @ApiProperty({ description: 'Coin type', enum: CoinId })
    coinId: CoinId;

    @ApiProperty({ description: 'User ID: initiator of the transaction' })
    userId: number;

    @ApiPropertyOptional({ description: 'Group ID: set when the group wallet (GR-00) is the payer' })
    groupId?: number;

    @ApiPropertyOptional({ description: 'Transaction details', type: 'object' })
    details?: IPaymentTransactionDetails;

    @ApiProperty({ description: 'Creation date', type: Date })
    @Type(() => Date)
    createdDate: Date;

    @ApiPropertyOptional({ description: 'Payment ID' })
    paymentId?: number;

    @ApiPropertyOptional({ description: 'Activation date', type: Date })
    @Type(() => Date)
    activatedDate?: Date;
}

export enum PaymentTransactionSourceType {
    FILE = 'FILE',
    CONVERSATION = 'CONVERSATION',
    AGENT_GRAPH_RUN = 'AGENT_GRAPH_RUN'
}

export interface IPaymentTransactionSource {
    type: PaymentTransactionSourceType;
    id: number | string;
}

export interface IPaymentTransactionDetails {
    model: AiModel;
    options: AiModelOptions;
    consumption: AiModelConsumption;
    source?: IPaymentTransactionSource;
}
