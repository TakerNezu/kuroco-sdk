"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const constants_1 = require("./constants");
const getComment_1 = require("./getComment");
const getModel_1 = require("./getModel");
const getModelDefault_1 = require("./getModelDefault");
const getOperationParameterName_1 = require("./getOperationParameterName");
const getType_1 = require("./getType");
function getOperationParameter(openApi, parameter) {
    const operationParameter = {
        in: parameter.in,
        prop: parameter.name,
        export: 'interface',
        name: getOperationParameterName_1.getOperationParameterName(parameter.name),
        type: constants_1.PrimaryType.OBJECT,
        base: constants_1.PrimaryType.OBJECT,
        template: null,
        link: null,
        description: getComment_1.getComment(parameter.description),
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
    if (parameter.$ref) {
        const definitionRef = getType_1.getType(parameter.$ref);
        operationParameter.export = 'reference';
        operationParameter.type = definitionRef.type;
        operationParameter.base = definitionRef.base;
        operationParameter.template = definitionRef.template;
        operationParameter.imports.push(...definitionRef.imports);
        return operationParameter;
    }
    if (parameter.schema) {
        if (parameter.schema.$ref) {
            const model = getType_1.getType(parameter.schema.$ref);
            operationParameter.export = 'reference';
            operationParameter.type = model.type;
            operationParameter.base = model.base;
            operationParameter.template = model.template;
            operationParameter.imports.push(...model.imports);
            operationParameter.default = getModelDefault_1.getModelDefault(parameter.schema);
            operationParameter.isRequired = operationParameter.isRequired || operationParameter.default;
            return operationParameter;
        }
        else {
            const model = getModel_1.getModel(openApi, parameter.schema);
            operationParameter.export = model.export;
            operationParameter.type = model.type;
            operationParameter.base = model.base;
            operationParameter.template = model.template;
            operationParameter.link = model.link;
            operationParameter.isReadOnly = model.isReadOnly;
            operationParameter.isRequired = operationParameter.isRequired || model.isRequired || model.default;
            operationParameter.isNullable = operationParameter.isNullable || model.isNullable;
            operationParameter.format = model.format;
            operationParameter.maximum = model.maximum;
            operationParameter.exclusiveMaximum = model.exclusiveMaximum;
            operationParameter.minimum = model.minimum;
            operationParameter.exclusiveMinimum = model.exclusiveMinimum;
            operationParameter.multipleOf = model.multipleOf;
            operationParameter.maxLength = model.maxLength;
            operationParameter.minLength = model.minLength;
            operationParameter.pattern = model.pattern;
            operationParameter.maxItems = model.maxItems;
            operationParameter.minItems = model.minItems;
            operationParameter.uniqueItems = model.uniqueItems;
            operationParameter.maxProperties = model.maxProperties;
            operationParameter.minProperties = model.minProperties;
            operationParameter.default = model.default;
            operationParameter.imports.push(...model.imports);
            operationParameter.extends.push(...model.extends);
            operationParameter.enum.push(...model.enum);
            operationParameter.enums.push(...model.enums);
            operationParameter.properties.push(...model.properties);
            return operationParameter;
        }
    }
    return operationParameter;
}
exports.getOperationParameter = getOperationParameter;
