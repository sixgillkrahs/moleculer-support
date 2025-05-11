export interface DefinedCode {
    CODE: number;
    MESSAGE: {
        [key: string]: string;
    };
    STATUS_CODE?: number;
}

export interface ResponseObj {
    code: number;
    state?: number;
    data: any;
    message: string;
}

export interface GatewayResponse {
    code: number;
    data: any;
    message: string;
}
