"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const camelcase_1 = __importDefault(require("camelcase"));
/**
 * Replaces any invalid characters from a parameter name.
 * For example: 'filter.someProperty' becomes 'filterSomeProperty'.
 */
function getOperationParameterName(value) {
    const clean = value.replace(/[^\w\s\-]+/g, '-').trim();
    return camelcase_1.default(clean);
}
exports.getOperationParameterName = getOperationParameterName;
