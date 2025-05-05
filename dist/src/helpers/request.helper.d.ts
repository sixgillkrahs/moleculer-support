interface RequestContext {
    method?: string;
    params: {
        query?: Record<string, any>;
        body?: Record<string, any>;
        params?: Record<string, any>;
        [key: string]: any;
    };
    headers?: Record<string, any>;
    meta?: {
        user?: Record<string, any>;
        headers?: Record<string, any>;
        [key: string]: any;
    };
    [key: string]: any;
}
/** Class RequestHelper
 * Handler base functions supporting process requests */
declare class RequestHelper {
    /** Get params via context
     * @param context
     * @output object params */
    static getParams(context: RequestContext): Record<string, any>;
    /** Private functions use for this service */
    static getCurrentAccount(context: RequestContext): Record<string, any>;
    static getLangCode(context: RequestContext): string;
    /** Sanitize request param
     * @param req
     * @output params valid or null */
    static sanitizeParam(req: RequestContext): Record<string, any> | null;
}
export default RequestHelper;
