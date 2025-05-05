import { StatusCodes } from 'http-status-codes';
export declare const HTTP_STATUS_CODES: typeof StatusCodes;
export declare const INTERNAL_CODES: {
    SUCCESS: {
        CODE: number;
        MESSAGE: {
            VI: string;
            EN: string;
        };
    };
    FAILED: {
        CODE: number;
        MESSAGE: {
            VI: string;
            EN: string;
        };
    };
    PROCESSING: {
        CODE: number;
        MESSAGE: {
            VI: string;
            EN: string;
        };
    };
    MISSING_PARAM: {
        CODE: number;
        MESSAGE: {
            VI: string;
            EN: string;
        };
        STATUS_CODE: number;
    };
    PARAMS_INVALID_FORMAT: {
        CODE: number;
        MESSAGE: {
            VI: string;
            EN: string;
        };
    };
    ITEM_NOT_FOUND: {
        CODE: number;
        MESSAGE: {
            VI: string;
            EN: string;
        };
    };
    EXISTED: {
        CODE: number;
        MESSAGE: {
            VI: string;
            EN: string;
        };
    };
    SAVING_FAILED: {
        CODE: number;
        MESSAGE: {
            VI: string;
            EN: string;
        };
    };
    LOGIN_FAILED: {
        CODE: number;
        MESSAGE: {
            VI: string;
            EN: string;
        };
    };
    PASSWORD_POLICY_INVALID: {
        CODE: number;
        MESSAGE: {
            VI: string;
            EN: string;
        };
    };
    RESET_PASSWORD_TOKEN_EXPIRED: {
        CODE: number;
        MESSAGE: {
            VI: string;
            EN: string;
        };
    };
    TOKEN_EXPIRED: {
        CODE: number;
        MESSAGE: {
            VI: string;
            EN: string;
        };
    };
    USER_NOT_FOUND: {
        CODE: number;
        MESSAGE: {
            VI: string;
            EN: string;
        };
    };
    ACCOUNT_LOCKED: {
        CODE: number;
        MESSAGE: {
            VI: string;
            EN: string;
        };
    };
    PASSWORD_INCORRECT: {
        CODE: number;
        MESSAGE: {
            VI: string;
            EN: string;
        };
    };
    REFUND_AMOUNT_EXCEEDED: {
        CODE: number;
        MESSAGE: {
            VI: string;
            EN: string;
        };
    };
};
export declare const GATE_CODES: {
    SUCCESS: {
        CODE: number;
        MESSAGE: {
            VI: string;
            EN: string;
        };
        STATUS_CODE: number;
    };
    FAILED: {
        CODE: number;
        MESSAGE: {
            VI: string;
            EN: string;
        };
        STATUS_CODE: number;
    };
};
export declare const STATE: {
    PROCESSING: number;
    DONE: number;
    FAILED: number;
};
