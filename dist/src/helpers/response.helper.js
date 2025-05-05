import { STATE, INTERNAL_CODES, HTTP_STATUS_CODES } from "../defined/state-code";
class ResponseHelper {
    /** Processing result return to publish actions */
    static resOK(data, state = STATE.DONE) {
        return {
            code: INTERNAL_CODES.SUCCESS.CODE,
            state,
            data,
            message: INTERNAL_CODES.SUCCESS.MESSAGE.EN
        };
    }
    /** Processing result return to publish actions */
    static resFailed(definedCodeObj, state, langCode = "EN", data = undefined) {
        if (definedCodeObj.CODE && definedCodeObj.MESSAGE) {
            return {
                code: definedCodeObj.CODE,
                state,
                message: definedCodeObj.MESSAGE[langCode.toUpperCase()] || definedCodeObj.MESSAGE.EN,
                data
            };
        }
        return {
            code: INTERNAL_CODES.FAILED.CODE,
            state,
            message: INTERNAL_CODES.FAILED.MESSAGE.EN,
            data
        };
    }
    /** Processing result return from service to gateway */
    static resGateway(dataService, res) {
        if (!dataService) {
            res.statusCode = HTTP_STATUS_CODES.REQUEST_TIMEOUT;
            return {
                code: INTERNAL_CODES.FAILED.CODE,
                data: null,
                message: "FAILED"
            };
        }
        if (dataService.code === INTERNAL_CODES.SUCCESS.CODE) {
            res.statusCode = HTTP_STATUS_CODES.OK;
            return {
                code: dataService.code,
                data: dataService.data,
                message: "SUCCESS"
            };
        }
        res.statusCode = HTTP_STATUS_CODES.EXPECTATION_FAILED;
        return {
            code: dataService.code,
            data: dataService.data,
            message: dataService.message || "FAILED"
        };
    }
    /** Processing result return from service to client directly */
    static resToClient(res, statusCode, code, message, data = undefined, headers = { "Content-Type": "application/json" }) {
        res.writeHead(statusCode, headers);
        res.end(JSON.stringify({ code, data, message }));
    }
    /** Result for PGW */
    static resOKPGW(data, state = STATE.DONE) {
        return {
            goop_resCode: INTERNAL_CODES.SUCCESS.CODE,
            data,
            goop_respMessage: INTERNAL_CODES.SUCCESS.MESSAGE.EN
        };
    }
    static resFailedPGW(definedCodeObj, state, langCode = "EN", data = undefined) {
        return {
            goop_resCode: definedCodeObj.CODE,
            data,
            goop_respMessage: definedCodeObj.MESSAGE[langCode.toUpperCase()] || definedCodeObj.MESSAGE.EN
        };
    }
}
export default ResponseHelper;
