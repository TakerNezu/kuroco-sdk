"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const constants_1 = require("./constants");
const getComment_1 = require("./getComment");
const getContent_1 = require("./getContent");
const getModel_1 = require("./getModel");
const getType_1 = require("./getType");
function getOperationRequestBody(openApi, parameter) {
    const requestBody = {
        in: 'body',
        prop: 'body',
        export: 'interface',
        name: 'requestBody',
        type: constants_1.PrimaryType.OBJECT,
        base: constants_1.PrimaryType.OBJECT,
        template: null,
        link: null,
        description: getComment_1.getComment(parameter.description),
        default: undefined,
        isDefinition: false,
        isReadOnly: false,
        isRequired: parameter.required === true,
        isNullable: parameter.nullable === true,
        imports: [],
        extends: [],
        enum: [],
        enums: [],
        properties: [],
    };
    if (parameter.content) {
        const schema = getContent_1.getContent(openApi, parameter.content);
        if (schema) {
            if (schema && schema.$ref) {
                const model = getType_1.getType(schema.$ref);
                requestBody.export = 'reference';
                requestBody.type = model.type;
                requestBody.base = model.base;
                requestBody.template = model.template;
                requestBody.imports.push(...model.imports);
                return requestBody;
            }
            else {
                const model = getModel_1.getModel(openApi, schema);
                requestBody.export = model.export;
                requestBody.type = model.type;
                requestBody.base = model.base;
                requestBody.template = model.template;
                requestBody.link = model.link;
                requestBody.isReadOnly = model.isReadOnly;
                requestBody.isRequired = requestBody.isRequired || model.isRequired;
                requestBody.isNullable = requestBody.isNullable || model.isNullable;
                requestBody.format = model.format;
                requestBody.maximum = model.maximum;
                requestBody.exclusiveMaximum = model.exclusiveMaximum;
                requestBody.minimum = model.minimum;
                requestBody.exclusiveMinimum = model.exclusiveMinimum;
                requestBody.multipleOf = model.multipleOf;
                requestBody.maxLength = model.maxLength;
                requestBody.minLength = model.minLength;
                requestBody.pattern = model.pattern;
                requestBody.maxItems = model.maxItems;
                requestBody.minItems = model.minItems;
                requestBody.uniqueItems = model.uniqueItems;
                requestBody.maxProperties = model.maxProperties;
                requestBody.minProperties = model.minProperties;
                requestBody.imports.push(...model.imports);
                requestBody.extends.push(...model.extends);
                requestBody.enum.push(...model.enum);
                requestBody.enums.push(...model.enums);
                requestBody.properties.push(...model.properties);
                return requestBody;
            }
        }
    }
    return requestBody;
}
exports.getOperationRequestBody = getOperationRequestBody;
