"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const camelcase_1 = __importDefault(require("camelcase"));
/**
 * Convert the input value to a correct operation (method) classname.
 * This converts the input string to camelCase, so the method name follows
 * the most popular Javascript and Typescript writing style.
 */
function getOperationName(value) {
    const clean = value.replace(/[^\w\s\-]+/g, '-').trim();
    return camelcase_1.default(clean);
}
exports.getOperationName = getOperationName;
