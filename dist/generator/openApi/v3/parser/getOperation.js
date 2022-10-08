"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const getComment_1 = require("./getComment");
const getOperationErrors_1 = require("./getOperationErrors");
const getOperationName_1 = require("./getOperationName");
const getOperationParameters_1 = require("./getOperationParameters");
const getOperationPath_1 = require("./getOperationPath");
const getOperationRequestBody_1 = require("./getOperationRequestBody");
const getOperationResponseHeader_1 = require("./getOperationResponseHeader");
const getOperationResponses_1 = require("./getOperationResponses");
const getOperationResults_1 = require("./getOperationResults");
const getServiceClassName_1 = require("./getServiceClassName");
const sortByRequired_1 = require("./sortByRequired");
const getOperationNameFallback_1 = require("./getOperationNameFallback");
const getOperationType_1 = require("./getOperationType");
function getOperation(openApi, url, method, op, path) {
    const serviceName = (op.tags && op.tags[0]) || 'Service';
    const serviceClassName = getServiceClassName_1.getServiceClassName(serviceName);
    const operationNameFallback = getOperationNameFallback_1.getOperationNameFallback([method, serviceClassName, url]);
    const operationName = getOperationName_1.getOperationName(op.operationId || operationNameFallback);
    const operationPath = getOperationPath_1.getOperationPath(url);
    // Create a new operation object for this method.
    const operation = {
        service: serviceClassName,
        name: operationName,
        type: getOperationType_1.getOperationType(path.summary),
        summary: getComment_1.getComment(op.summary),
        description: getComment_1.getComment(op.description),
        deprecated: op.deprecated === true,
        method: method,
        path: operationPath,
        parameters: [],
        parametersPath: [],
        parametersQuery: [],
        parametersForm: [],
        parametersHeader: [],
        parametersCookie: [],
        parametersBody: null,
        imports: [],
        errors: [],
        results: [],
        responseHeader: null,
        security: op.security,
    };
    // Parse the operation parameters (path, query, body, etc).
    if (op.parameters) {
        const parameters = getOperationParameters_1.getOperationParameters(openApi, op.parameters);
        operation.imports.push(...parameters.imports);
        operation.parameters.push(...parameters.parameters);
        operation.parametersPath.push(...parameters.parametersPath);
        operation.parametersQuery.push(...parameters.parametersQuery);
        operation.parametersForm.push(...parameters.parametersForm);
        operation.parametersHeader.push(...parameters.parametersHeader);
        operation.parametersCookie.push(...parameters.parametersCookie);
        operation.parametersBody = parameters.parametersBody;
    }
    if (op.requestBody) {
        const requestBody = getOperationRequestBody_1.getOperationRequestBody(openApi, op.requestBody);
        operation.imports.push(...requestBody.imports);
        operation.parameters.push(requestBody);
        operation.parameters = operation.parameters.sort(sortByRequired_1.sortByRequired);
        operation.parametersBody = requestBody;
    }
    // Parse the operation responses.
    if (op.responses) {
        const operationResponses = getOperationResponses_1.getOperationResponses(openApi, op.responses);
        const operationResults = getOperationResults_1.getOperationResults(operationResponses);
        operation.errors = getOperationErrors_1.getOperationErrors(operationResponses);
        operation.responseHeader = getOperationResponseHeader_1.getOperationResponseHeader(operationResults);
        operationResults.forEach(operationResult => {
            operation.results.push(operationResult);
            operation.imports.push(...operationResult.imports);
        });
    }
    return operation;
}
exports.getOperation = getOperation;
