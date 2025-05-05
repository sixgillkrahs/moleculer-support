"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const lodash_1 = __importDefault(require("lodash"));
const mongo_sanitize_1 = __importDefault(require("mongo-sanitize"));
const jsonDiff = __importStar(require("json-diff"));
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
        if (params && !lodash_1.default.isEmpty(params)) {
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
        const languageCode = lodash_1.default.isEmpty(context.meta)
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
        const paramsCheck = JSON.stringify((0, mongo_sanitize_1.default)(params));
        const isDiff = jsonDiff.diffString(paramOriginal, paramsCheck);
        if (lodash_1.default.isEmpty(isDiff)) {
            return params;
        }
        return null;
    }
}
exports.default = RequestHelper;
