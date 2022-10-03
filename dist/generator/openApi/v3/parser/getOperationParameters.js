"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const getOperationParameter_1 = require("./getOperationParameter");
const getRef_1 = require("./getRef");
const sortByRequired_1 = require("./sortByRequired");
function getOperationParameters(openApi, parameters) {
    const operationParameters = {
        imports: [],
        parameters: [],
        parametersPath: [],
        parametersQuery: [],
        parametersForm: [],
        parametersCookie: [],
        parametersHeader: [],
        parametersBody: null,
    };
    // Iterate over the parameters
    parameters.forEach(parameterOrReference => {
        const parameter = getRef_1.getRef(openApi, parameterOrReference);
        const param = getOperationParameter_1.getOperationParameter(openApi, parameter);
        // We ignore the "api-version" param, since we do not want to add this
        // as the first / default parameter for each of the service calls.
        if (param.prop !== 'api-version') {
            switch (parameter.in) {
                case 'path':
                    operationParameters.parametersPath.push(param);
                    operationParameters.parameters.push(param);
                    operationParameters.imports.push(...param.imports);
                    break;
                case 'query':
                    operationParameters.parametersQuery.push(param);
                    operationParameters.parameters.push(param);
                    operationParameters.imports.push(...param.imports);
                    break;
                case 'formData':
                    operationParameters.parametersForm.push(param);
                    operationParameters.parameters.push(param);
                    operationParameters.imports.push(...param.imports);
                    break;
                case 'cookie':
                    operationParameters.parametersCookie.push(param);
                    operationParameters.parameters.push(param);
                    operationParameters.imports.push(...param.imports);
                    break;
                case 'header':
                    operationParameters.parametersHeader.push(param);
                    operationParameters.parameters.push(param);
                    operationParameters.imports.push(...param.imports);
                    break;
            }
        }
    });
    operationParameters.parameters = operationParameters.parameters.sort(sortByRequired_1.sortByRequired);
    operationParameters.parametersPath = operationParameters.parametersPath.sort(sortByRequired_1.sortByRequired);
    operationParameters.parametersQuery = operationParameters.parametersQuery.sort(sortByRequired_1.sortByRequired);
    operationParameters.parametersForm = operationParameters.parametersForm.sort(sortByRequired_1.sortByRequired);
    operationParameters.parametersCookie = operationParameters.parametersCookie.sort(sortByRequired_1.sortByRequired);
    operationParameters.parametersHeader = operationParameters.parametersHeader.sort(sortByRequired_1.sortByRequired);
    return operationParameters;
}
exports.getOperationParameters = getOperationParameters;
