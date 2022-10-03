"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function getOperationResponseHeader(operationResponses) {
    const header = operationResponses.find(operationResponses => {
        return operationResponses.in === 'header';
    });
    if (header) {
        return header.name;
    }
    return null;
}
exports.getOperationResponseHeader = getOperationResponseHeader;
