export interface BRErrorParams {
    message: string;
    type: string;
    stack?: any;
    code?: number;
    status?: number;
}

export class BRError extends Error {
    type: string;
    code?: number;
    status?: number;

    constructor(data: BRErrorParams) {
        super();
        this.message = data.message || this.message;
        this.type = data.type;
        this.code = data.code;
        this.stack = data.stack || this.stack;
        this.status = data.status || this.status;
    }
}