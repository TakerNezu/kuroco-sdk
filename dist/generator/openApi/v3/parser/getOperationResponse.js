"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const constants_1 = require("./constants");
const getComment_1 = require("./getComment");
const getContent_1 = require("./getContent");
const getModel_1 = require("./getModel");
const getType_1 = require("./getType");
function getOperationResponse(openApi, response, responseCode) {
    const operationResponse = {
        in: 'response',
        name: '',
        code: responseCode,
        description: getComment_1.getComment(response.description),
        export: 'generic',
        type: constants_1.PrimaryType.OBJECT,
        base: constants_1.PrimaryType.OBJECT,
        template: null,
        link: null,
        isDefinition: false,
        isReadOnly: false,
        isRequired: false,
        isNullable: false,
        imports: [],
        extends: [],
        enum: [],
        enums: [],
        properties: [],
    };
    // We support basic properties from response headers, since both
    // fetch and XHR client just support string types.
    if (response.headers) {
        for (const name in response.headers) {
            if (response.headers.hasOwnProperty(name)) {
                operationResponse.in = 'header';
                operationResponse.name = name;
                operationResponse.type = constants_1.PrimaryType.STRING;
                operationResponse.base = constants_1.PrimaryType.STRING;
                return operationResponse;
            }
        }
    }
    if (response.content) {
        const schema = getContent_1.getContent(openApi, response.content);
        if (schema) {
            if (schema && schema.$ref) {
                const model = getType_1.getType(schema.$ref);
                operationResponse.export = 'reference';
                operationResponse.type = model.type;
                operationResponse.base = model.base;
                operationResponse.template = model.template;
                operationResponse.imports.push(...model.imports);
                return operationResponse;
            }
            else {
                const model = getModel_1.getModel(openApi, schema);
                operationResponse.export = model.export;
                operationResponse.type = model.type;
                operationResponse.base = model.base;
                operationResponse.template = model.template;
                operationResponse.link = model.link;
                operationResponse.isReadOnly = model.isReadOnly;
                operationResponse.isRequired = model.isRequired;
                operationResponse.isNullable = model.isNullable;
                operationResponse.format = model.format;
                operationResponse.maximum = model.maximum;
                operationResponse.exclusiveMaximum = model.exclusiveMaximum;
                operationResponse.minimum = model.minimum;
                operationResponse.exclusiveMinimum = model.exclusiveMinimum;
                operationResponse.multipleOf = model.multipleOf;
                operationResponse.maxLength = model.maxLength;
                operationResponse.minLength = model.minLength;
                operationResponse.pattern = model.pattern;
                operationResponse.maxItems = model.maxItems;
                operationResponse.minItems = model.minItems;
                operationResponse.uniqueItems = model.uniqueItems;
                operationResponse.maxProperties = model.maxProperties;
                operationResponse.minProperties = model.minProperties;
                operationResponse.imports.push(...model.imports);
                operationResponse.extends.push(...model.extends);
                operationResponse.enum.push(...model.enum);
                operationResponse.enums.push(...model.enums);
                operationResponse.properties.push(...model.properties);
                return operationResponse;
            }
        }
    }
    return operationResponse;
}
exports.getOperationResponse = getOperationResponse;
