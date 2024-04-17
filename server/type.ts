export type TradieUser = {
    name: string;
    description?: string;
    jobRole?: string;
    color: string;
}

export type Message = {
    type: 'join',
    message: 'joined successfully',
    user: TradieUser;
} | {
    type: 'leave',
    message: 'left',
    user: TradieUser;
} | {
    type: 'chat',
    message: string;
    user: TradieUser;
}