export enum ResourceType {
    TASK = 'task',
    AGENT = 'agent',
    AGENT_GRAPH = 'agent-graph',
    AGENT_GRAPH_RUN = 'agent-graph-run',
    GROUP = 'group',
    GROUP_BUDGET = 'group-budget',
    PAYMENT = 'payment',
    PAYMENT_TRANSACTION = 'payment-transaction',
    USER_TOKEN = 'user-token',
    USER = 'user',
    FILE = 'file',
    CONVERSATION = 'conversation',
    COIN_BALANCE = 'coin-balance',
    AI_MODEL = 'ai-model',
    MCP_SERVER = 'mcp-server',
}

export enum ResourceScope {
    EXECUTE = 'execute',
    CANCEL = 'cancel',
    READ = 'read',
    LIST = 'list',
    SEARCH = 'search',
    ADD = 'add',
    EDIT = 'edit',
    REMOVE = 'remove',
}
