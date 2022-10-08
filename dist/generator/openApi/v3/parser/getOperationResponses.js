"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const getOperationResponse_1 = require("./getOperationResponse");
const getOperationResponseCode_1 = require("./getOperationResponseCode");
const getRef_1 = require("./getRef");
function getOperationResponses(openApi, responses) {
    const operationResponses = [];
    // Iterate over each response code and get the
    // status code and response message (if any).
    for (const code in responses) {
        if (responses.hasOwnProperty(code)) {
            const responseOrReference = responses[code];
            const response = getRef_1.getRef(openApi, responseOrReference);
            const responseCode = getOperationResponseCode_1.getOperationResponseCode(code);
            if (responseCode) {
                operationResponses.push(getOperationResponse_1.getOperationResponse(openApi, response, responseCode));
            }
        }
    }
    // Sort the responses to 2XX success codes come before 4XX and 5XX error codes.
    return operationResponses.sort((a, b) => {
        return a.code < b.code ? -1 : a.code > b.code ? 1 : 0;
    });
}
exports.getOperationResponses = getOperationResponses;
