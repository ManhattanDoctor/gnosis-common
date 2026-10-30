import { AiModel } from './AiModel';
import { AiSttModel } from './AiSttModel';
import { AiToolConnection, IAiToolConnection } from './IAiToolConnection';
import { IAiModelParameterSchema } from './IAiModelDescription';

export class AiToolUtil {
    //--------------------------------------------------------------------------
    //
    //  Public Static Methods
    //
    //--------------------------------------------------------------------------

    public static getConnection(item: AiToolConnection): IAiToolConnection {
        return typeof item === 'string' ? { uid: item } : item;
    }

    /** Входные данные задачи и выбор модели не являются постоянными параметрами. */
    public static getSettingsSchema(schema: IAiModelParameterSchema, provider?: AiModel): IAiModelParameterSchema {
        let result = structuredClone(schema);
        let names = Object.values(AiSttModel).some(item => item === provider) ? ['model'] : ['model', 'prompt', 'frameImages'];
        for (let name of names) {
            delete result.properties?.[name];
        }
        result.required = [];
        result.additionalProperties = false;
        return result;
    }
}
