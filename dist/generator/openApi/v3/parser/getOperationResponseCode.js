"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function getOperationResponseCode(value) {
    // You can specify a "default" response, this is treated as HTTP code 200
    if (value === 'default') {
        return 200;
    }
    // Check if we can parse the code and return of successful.
    if (/[0-9]+/g.test(value)) {
        const code = parseInt(value);
        if (Number.isInteger(code)) {
            return Math.abs(code);
        }
    }
    return null;
}
exports.getOperationResponseCode = getOperationResponseCode;
