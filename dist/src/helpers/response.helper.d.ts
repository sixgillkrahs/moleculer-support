interface DefinedCode {
    CODE: number;
    MESSAGE: {
        [key: string]: string;
    };
    STATUS_CODE?: number;
}
interface ResponseObj {
    code: number;
    state?: number;
    data: any;
    message: string;
}
interface GatewayResponse {
    code: number;
    data: any;
    message: string;
}
declare class ResponseHelper {
    /** Processing result return to publish actions */
    static resOK(data: any, state?: number): ResponseObj;
    /** Processing result return to publish actions */
    static resFailed(definedCodeObj: DefinedCode, state: number, langCode?: string, data?: any): ResponseObj;
    /** Processing result return from service to gateway */
    static resGateway(dataService: ResponseObj | null, res: any): GatewayResponse;
    /** Processing result return from service to client directly */
    static resToClient(res: any, statusCode: number, code: number, message: string, data?: any, headers?: Record<string, string>): void;
    /** Result for PGW */
    static resOKPGW(data: any, state?: number): Record<string, any>;
    static resFailedPGW(definedCodeObj: DefinedCode, state: string, langCode?: string, data?: any): Record<string, any>;
}
export default ResponseHelper;
