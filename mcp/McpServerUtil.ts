import { AiToolType } from '../ai';
import { McpServer, MCP_SERVER_UID_PATTERN } from './McpServer';
import { ToolTypeUtil } from '../util';
import * as _ from 'lodash';

export class McpServerUtil {
    // --------------------------------------------------------------------------
    //
    // 	Constants
    //
    // --------------------------------------------------------------------------

    /** Префикс mcp-сервера в списке инструментов: «mcp:<uid>». Отличает его от графа (graph:) и встроенного тула */
    public static PREFIX = 'mcp:';

    // --------------------------------------------------------------------------
    //
    // 	Static Methods
    //
    // --------------------------------------------------------------------------

    /**
     * The agent tools are plain strings: either a built in AiToolType value or an mcp server uid
     */
    public static isBuiltIn(item: string): boolean {
        return Object.values(AiToolType).includes(item as AiToolType);
    }

    public static isType(item: string): boolean {
        return ToolTypeUtil.isType(item, McpServerUtil.PREFIX);
    }

    public static getType(uid: string): string {
        return ToolTypeUtil.getType(uid, McpServerUtil.PREFIX);
    }

    /**
     * Снимает префикс «mcp:». Строку без префикса возвращает как есть — так в списке инструментов
     * беседы продолжают работать mcp-серверы, сохранённые до введения префиксов (старый формат — голый uid)
     */
    public static getUid(type: string): string {
        return ToolTypeUtil.getUid(type, McpServerUtil.PREFIX);
    }

    public static isUidValid(item: string): boolean {
        return !_.isEmpty(item) && MCP_SERVER_UID_PATTERN.test(item);
    }

    public static getUids(items: Array<McpServer>): Array<string> {
        return !_.isEmpty(items) ? items.map(item => item.uid) : new Array();
    }
}
