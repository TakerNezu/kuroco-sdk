"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function getOperationErrors(operationResponses) {
    return operationResponses
        .filter(operationResponse => {
        return operationResponse.code >= 300 && operationResponse.description;
    })
        .map(response => ({
        code: response.code,
        description: response.description,
    }));
}
exports.getOperationErrors = getOperationErrors;
