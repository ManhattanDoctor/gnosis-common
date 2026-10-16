import { ITraceable } from '@ts-core/common';
import { AgentGraphRun } from '../../agent';
import { IPayer } from '../../group';

export interface IAgentGraphRunDto extends ITraceable {
    input: string;
    session?: string;
    /** Файлы, с которыми начинается прогон: макет, бриф, образец — их увидят узлы с самого начала */
    fileIds?: Array<number>;
    /**
     * Сколько прогон может потратить, в рублях. Необязателен: прогон и так не выйдет за общий потолок
     * и за баланс на момент запуска, а это поле только опускает предел ниже них
     */
    maxCost?: string;
    // Источник оплаты: личный баланс (по умолчанию) либо кошелёк группы
    payer?: IPayer;
}

export type IAgentGraphRunDtoResponse = AgentGraphRun;

export interface IAgentGraphResumeDto extends ITraceable {
    value: string;
    isApproved: boolean;
    /** Файлы, приложенные человеком: эскиз дизайнера, требования, образец — их увидят следующие узлы */
    fileIds?: Array<number>;
}

export type IAgentGraphResumeDtoResponse = AgentGraphRun;
