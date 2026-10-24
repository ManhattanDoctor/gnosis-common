import { ToolTypeUtil } from '../util';

/**
 * Граф агентов как инструмент беседы. В списке инструментов граф обозначается «graph:<id>»:
 * префикс отличает его от mcp-сервера и встроенного тула. Общий источник префикса для бэка и фронта
 */
export class AgentGraphToolUtil {
    // --------------------------------------------------------------------------
    //
    //  Constants
    //
    // --------------------------------------------------------------------------

    public static PREFIX = 'graph:';

    // --------------------------------------------------------------------------
    //
    //  Static Methods
    //
    // --------------------------------------------------------------------------

    public static isType(item: string): boolean {
        return ToolTypeUtil.isType(item, AgentGraphToolUtil.PREFIX);
    }

    public static getType(uid: string): string {
        return ToolTypeUtil.getType(uid, AgentGraphToolUtil.PREFIX);
    }

    public static getUid(type: string): string {
        return ToolTypeUtil.getUid(type, AgentGraphToolUtil.PREFIX);
    }
}
