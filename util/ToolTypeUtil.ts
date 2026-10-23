import * as _ from 'lodash';

/**
 * Тип инструмента беседы в списке — строка. Встроенный тул это голый AiToolType, а источники по uid
 * (mcp-сервер, граф) различаются префиксом: «mcp:<uid>», «graph:<uid>». Здесь общая работа с префиксом,
 * чтобы McpServerUtil и AgentGraphTool не повторяли одно и то же
 */
export class ToolTypeUtil {
    // --------------------------------------------------------------------------
    //
    //  Static Methods
    //
    // --------------------------------------------------------------------------

    public static isType(type: string, prefix: string): boolean {
        return !_.isEmpty(type) && type.startsWith(prefix);
    }

    public static getType(uid: string, prefix: string): string {
        return `${prefix}${uid}`;
    }

    /** Снимает префикс. Строку без него возвращает как есть — так работает старый формат (голый uid) */
    public static getUid(type: string, prefix: string): string {
        return ToolTypeUtil.isType(type, prefix) ? type.substring(prefix.length) : type;
    }
}
