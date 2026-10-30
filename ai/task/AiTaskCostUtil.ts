import { IAiPendingCost } from './IAiPendingCost';
import { ICoinAmount } from '../../coin';
import { AiModelConsumption } from '../AiModel';
import { AiTaskCostStatus, IAiTaskCost } from './IAiTaskCost';

/** Единый результат расчёта для задачи и шага графа */
export class AiTaskCostUtil {

    //--------------------------------------------------------------------------
    //
    //  Static Methods
    //
    //--------------------------------------------------------------------------

    public static create(amounts: Array<ICoinAmount>, consumption: AiModelConsumption, status: AiTaskCostStatus = AiTaskCostStatus.FINAL): IAiTaskCost {
        let pending = new Map<string, IAiPendingCost>();
        for (let tool of consumption?.['tools'] || []) {
            for (let item of tool.pending || []) {
                pending.set(item.operationId, item);
            }
        }
        let unavailable = status === AiTaskCostStatus.UNAVAILABLE || (consumption?.['tools'] || []).some(tool =>
            tool.status === AiTaskCostStatus.UNAVAILABLE || (tool.status === AiTaskCostStatus.PENDING && !tool.pending?.length));
        return {
            amounts,
            status: unavailable ? AiTaskCostStatus.UNAVAILABLE : pending.size > 0 ? AiTaskCostStatus.PENDING : status,
            pending: pending.size > 0 ? Array.from(pending.values()) : undefined
        };
    }
}
