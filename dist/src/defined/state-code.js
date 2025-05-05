"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.STATE = exports.GATE_CODES = exports.INTERNAL_CODES = exports.HTTP_STATUS_CODES = void 0;
const default_json_1 = __importDefault(require("./states/default.json"));
const default_json_2 = __importDefault(require("./internal-codes/default.json"));
const http_status_codes_1 = require("http-status-codes");
const default_json_3 = __importDefault(require("./gateway-codes/default.json"));
exports.HTTP_STATUS_CODES = http_status_codes_1.StatusCodes;
exports.INTERNAL_CODES = default_json_2.default;
exports.GATE_CODES = default_json_3.default;
exports.STATE = default_json_1.default;
