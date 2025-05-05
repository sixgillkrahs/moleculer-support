import _ from "lodash";
import sanitize from "mongo-sanitize";
import * as jsonDiff from "json-diff";
/** Class RequestHelper
 * Handler base functions supporting process requests */
class RequestHelper {
    /** Get params via context
     * @param context
     * @output object params */
    static getParams(context) {
        // Nếu đã merge sẵn trong middleware
        if (context.$params) {
            return context.$params;
        }
        if (context.params &&
            !context.params.query &&
            !context.params.body &&
            !context.params.params) {
            return context.params;
        }
        let params = {};
        if (context.method) {
            switch (context.method) {
                case "GET": {
                    params = {
                        ...context.params.query,
                        ...context.params.params,
                    };
                    break;
                }
                case "POST":
                case "PUT":
                case "DELETE":
                case "OPTIONS": {
                    params = context.params.body;
                    break;
                }
            }
        }
        if (params && !_.isEmpty(params)) {
            return params;
        }
        params = {
            ...context.params.query,
            ...context.params.body,
            ...context.params.params,
        };
        return params;
    }
    /** Private functions use for this service */
    static getCurrentAccount(context) {
        const user = context.meta?.user;
        if (!user) {
            return {};
        }
        return user;
    }
    static getLangCode(context) {
        const languageCode = _.isEmpty(context.meta)
            ? context?.meta?.headers?.["accept-language"] ??
                context?.headers?.["accept-language"]
            : context?.meta?.headers?.["accept-language"];
        return languageCode || "vi";
    }
    /** Sanitize request param
     * @param req
     * @output params valid or null */
    static sanitizeParam(req) {
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
