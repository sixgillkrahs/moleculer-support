import _ from "lodash";
import sanitize from "mongo-sanitize";
import * as jsonDiff from "json-diff";

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
class RequestHelper {

    /** Get params via context
     * @param context
     * @output object params */
    static getParams(context: RequestContext): Record<string, any> {
        // Nếu đã merge sẵn trong middleware
        if ((context as any).$params) {
            return (context as any).$params;
        }
        if (
            context.params &&
            !(context.params as any).query &&
            !(context.params as any).body &&
            !(context.params as any).params
        ) {
            return context.params;
        }

        let params: Record<string, any> = {};

        if (context.method) {
            switch (context.method) {
                case "GET": {
                    params = {
                        ...(context.params as any).query,
                        ...(context.params as any).params,
                    };
                    break;
                }
                case "POST":
                case "PUT":
                case "DELETE":
                case "OPTIONS": {
                    params = (context.params as any).body;
                    break;
                }
            }
        }

        if (params && !_.isEmpty(params)) {
            return params;
        }

        params = {
            ...(context.params as any).query,
            ...(context.params as any).body,
            ...(context.params as any).params,
        };
        return params;
    }

    /** Private functions use for this service */
    static getCurrentAccount(context: RequestContext): Record<string, any> {
        const user = context.meta?.user;
        if (!user) {
            return {};
        }
        return user;
    }

    static getLangCode(context: RequestContext): string {
        const languageCode =
            _.isEmpty(context.meta)
                ? context?.meta?.headers?.["accept-language"] ??
                context?.headers?.["accept-language"]
                : context?.meta?.headers?.["accept-language"];

        return languageCode || "vi";
    }

    /** Sanitize request param
     * @param req
     * @output params valid or null */
    static sanitizeParam(req: RequestContext): Record<string, any> | null {
        const params = RequestHelper.getParams(req);
        const paramOriginal = JSON.stringify(params);
        const paramsCheck = JSON.stringify(sanitize(params));
        const isDiff = jsonDiff.diffString(paramOriginal, paramsCheck);
        if (_.isEmpty(isDiff)) {
            return params;
        }
        return null;
    }
}

export default RequestHelper;
