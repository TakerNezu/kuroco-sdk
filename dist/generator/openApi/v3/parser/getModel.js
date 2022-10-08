"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const constants_1 = require("./constants");
const extendEnum_1 = require("./extendEnum");
const getComment_1 = require("./getComment");
const getEnum_1 = require("./getEnum");
const getEnumFromDescription_1 = require("./getEnumFromDescription");
const getModelDefault_1 = require("./getModelDefault");
const getModelProperties_1 = require("./getModelProperties");
const getType_1 = require("./getType");
function getModel(openApi, definition, isDefinition = false, name = '') {
    const model = {
        name: name,
        export: 'interface',
        type: constants_1.PrimaryType.OBJECT,
        base: constants_1.PrimaryType.OBJECT,
        template: null,
        link: null,
        description: getComment_1.getComment(definition.description),
        isDefinition: isDefinition,
        isReadOnly: definition.readOnly === true,
        isNullable: definition.nullable === true,
        isRequired: false,
        imports: [],
        extends: [],
        enum: [],
        enums: [],
        properties: [],
    };
    if (definition.$ref) {
        const definitionRef = getType_1.getType(definition.$ref);
        model.export = 'reference';
        model.type = definitionRef.type;
        model.base = definitionRef.base;
        model.template = definitionRef.template;
        model.imports.push(...definitionRef.imports);
        model.default = getModelDefault_1.getModelDefault(definition, model);
        return model;
    }
    if (definition.enum) {
        const enumerators = getEnum_1.getEnum(definition.enum);
        const extendedEnumerators = extendEnum_1.extendEnum(enumerators, definition);
        if (extendedEnumerators.length) {
            model.export = 'enum';
            model.type = constants_1.PrimaryType.STRING;
            model.base = constants_1.PrimaryType.STRING;
            model.enum.push(...extendedEnumerators);
            model.default = getModelDefault_1.getModelDefault(definition, model);
            return model;
        }
    }
    if ((definition.type === 'int' || definition.type === 'integer') && definition.description) {
        const enumerators = getEnumFromDescription_1.getEnumFromDescription(definition.description);
        if (enumerators.length) {
            model.export = 'enum';
            model.type = constants_1.PrimaryType.NUMBER;
            model.base = constants_1.PrimaryType.NUMBER;
            model.enum.push(...enumerators);
            model.default = getModelDefault_1.getModelDefault(definition, model);
            return model;
        }
    }
    if (definition.type === 'array' && definition.items) {
        if (definition.items.$ref) {
            const arrayItems = getType_1.getType(definition.items.$ref);
            model.export = 'array';
            model.type = arrayItems.type;
            model.base = arrayItems.base;
            model.template = arrayItems.template;
            model.imports.push(...arrayItems.imports);
            model.default = getModelDefault_1.getModelDefault(definition, model);
            return model;
        }
        else {
            const arrayItems = getModel(openApi, definition.items);
            model.export = 'array';
            model.type = arrayItems.type;
            model.base = arrayItems.base;
            model.template = arrayItems.template;
            model.link = arrayItems;
            model.imports.push(...arrayItems.imports);
            model.default = getModelDefault_1.getModelDefault(definition, model);
            return model;
        }
    }
    if (definition.type === 'object' && definition.additionalProperties && typeof definition.additionalProperties === 'object') {
        if (definition.additionalProperties.$ref) {
            const additionalProperties = getType_1.getType(definition.additionalProperties.$ref);
            model.export = 'dictionary';
            model.type = additionalProperties.type;
            model.base = additionalProperties.base;
            model.template = additionalProperties.template;
            model.imports.push(...additionalProperties.imports);
            model.imports.push('Dictionary');
            model.default = getModelDefault_1.getModelDefault(definition, model);
            return model;
        }
        else {
            const additionalProperties = getModel(openApi, definition.additionalProperties);
            model.export = 'dictionary';
            model.type = additionalProperties.type;
            model.base = additionalProperties.base;
            model.template = additionalProperties.template;
            model.link = additionalProperties;
            model.imports.push(...additionalProperties.imports);
            model.imports.push('Dictionary');
            model.default = getModelDefault_1.getModelDefault(definition, model);
            return model;
        }
    }
    // TODO: add-hock fixing. to support anyOf & oneOf with primitive types.
    // the originally source couldn't handle above case but $ref type could do.
    // this should be able to manage both types.
    if (definition.anyOf && definition.anyOf.length) {
        model.export = 'generic';
        const compositionItems = definition.anyOf
            .map(d => {
            if (d.oneOf) {
                return d.oneOf.map(a => getModel(openApi, a)).flat().flat();
            }
            if (d.anyOf) {
                return d.anyOf.map(a => getModel(openApi, a)).flat().flat();
            }
            return [getModel(openApi, d)];
        })
            .flat();
        const composition = compositionItems
            .map(t => {
            if (t.enum.length > 0) {
                return t.enum.map(e => e.value).join(' | ');
            }
            if (t.properties.length > 0) {
                return t.properties.length === 1 ? t.properties.map(p => `{ ${p.name}: ${getType_1.getType(p.type).type} }`) : `{ ${t.properties.map(p => `${p.name}: ${getType_1.getType(p.type).type} `)} }`;
            }
            return t.type;
        })
            .join(' | ');
        model.type = composition;
        model.base = composition;
        const iter = compositionItems.reduce((prev, cur) => {
            return {
                imports: [...(prev.imports || []), ...cur.imports],
                extends: [...(prev.extends || []), ...cur.extends],
                enum: [...(prev.enum || []), ...cur.enum],
                enums: [...(prev.enums || []), ...cur.enums],
                properties: [...(prev.properties || []), ...cur.properties],
            };
        }, {});
        model.imports = iter.imports;
        model.extends = iter.extends;
        model.enum = iter.enum;
        model.enums = iter.enums;
        model.properties = iter.properties;
        return model;
    }
    // TODO: add-hock fixing. to support anyOf & oneOf with primitive types.
    // the originally source couldn't handle above case but $ref type could do.
    // this should be able to manage both types.
    if (definition.oneOf && definition.oneOf.length) {
        model.export = 'generic';
        const compositionItems = definition.oneOf
            .map(d => {
            if (d.oneOf) {
                return d.oneOf.map(a => getModel(openApi, a)).flat().flat();
            }
            if (d.anyOf) {
                return d.anyOf.map(a => getModel(openApi, a)).flat().flat();
            }
            return [getModel(openApi, d)];
        })
            .flat();
        const composition = compositionItems
            .map(t => {
            if (t.enum.length > 0) {
                return t.enum.map(e => e.value).join(' | ');
            }
            if (t.properties.length > 0) {
                return t.properties.length === 1 ? t.properties.map(p => `{ ${p.name}: ${getType_1.getType(p.type).type} }`) : `{ ${t.properties.map(p => `${p.name}: ${getType_1.getType(p.type).type} `)} }`;
            }
            return t.type;
        })
            .join(' | ');
        if (composition === '') {
            console.log(compositionItems);
        }
        model.type = composition;
        model.base = composition;
        const iter = compositionItems.reduce((prev, cur) => {
            return {
                imports: [...(prev.imports || []), ...cur.imports],
                extends: [...(prev.extends || []), ...cur.extends],
                enum: [...(prev.enum || []), ...cur.enum],
                enums: [...(prev.enums || []), ...cur.enums],
                properties: [...(prev.properties || []), ...cur.properties],
            };
        }, {});
        model.imports = iter.imports;
        model.extends = iter.extends;
        model.enum = iter.enum;
        model.enums = iter.enums;
        model.properties = iter.properties;
        return model;
    }
    if (definition.type === 'object') {
        model.export = 'interface';
        model.type = constants_1.PrimaryType.OBJECT;
        model.base = constants_1.PrimaryType.OBJECT;
        model.default = getModelDefault_1.getModelDefault(definition, model);
        if (definition.allOf) {
            definition.allOf.forEach(parent => {
                if (parent.$ref) {
                    const parentRef = getType_1.getType(parent.$ref);
                    model.extends.push(parentRef.base);
                    model.imports.push(parentRef.base);
                }
                if (parent.type === 'object' && parent.properties) {
                    const properties = getModelProperties_1.getModelProperties(openApi, parent);
                    properties.forEach(property => {
                        model.properties.push(property);
                        model.imports.push(...property.imports);
                        if (property.export === 'enum') {
                            model.enums.push(property);
                        }
                    });
                }
            });
        }
        if (definition.properties) {
            const properties = getModelProperties_1.getModelProperties(openApi, definition);
            properties.forEach(property => {
                model.properties.push(property);
                model.imports.push(...property.imports);
                if (property.export === 'enum') {
                    model.enums.push(property);
                }
            });
        }
        return model;
    }
    // If the schema has a type than it can be a basic or generic type.
    if (definition.type) {
        const definitionType = getType_1.getType(definition.type);
        model.export = 'generic';
        model.type = definitionType.type;
        model.base = definitionType.base;
        model.template = definitionType.template;
        model.imports.push(...definitionType.imports);
        model.default = getModelDefault_1.getModelDefault(definition, model);
        return model;
    }
    return model;
}
exports.getModel = getModel;
