"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const constants_1 = require("./constants");
const getMappedType_1 = require("./getMappedType");
const stripNamespace_1 = require("./stripNamespace");
/**
 * Parse any string value into a type object.
 * @param value String value like "integer" or "Link[Model]".
 * @param template Optional template class from parent (needed to process generics)
 */
function getType(value, template) {
    const result = {
        type: constants_1.PrimaryType.OBJECT,
        base: constants_1.PrimaryType.OBJECT,
        template: null,
        imports: [],
    };
    const valueClean = stripNamespace_1.stripNamespace(value || '');
    if (/\[.*\]$/g.test(valueClean)) {
        const matches = valueClean.match(/(.*?)\[(.*)\]$/);
        if (matches && matches.length) {
            const match1 = getType(matches[1]);
            const match2 = getType(matches[2]);
            if (match1.type === constants_1.PrimaryType.ARRAY) {
                result.type = `${match2.type}[]`;
                result.base = `${match2.type}`;
                match1.imports = [];
            }
            else if (match2.type) {
                result.type = `${match1.type}<${match2.type}>`;
                result.base = match1.type;
                result.template = match2.type;
            }
            else {
                result.type = match1.type;
                result.base = match1.type;
                result.template = match1.type;
            }
            result.imports.push(...match1.imports);
            result.imports.push(...match2.imports);
        }
    }
    else if (getMappedType_1.hasMappedType(valueClean)) {
        const mapped = getMappedType_1.getMappedType(valueClean);
        result.type = mapped;
        result.base = mapped;
    }
    else if (valueClean) {
        result.type = valueClean;
        result.base = valueClean;
        result.imports.push(valueClean);
    }
    // If the property that we found matched the parent template class
    // Then ignore this whole property and return it as a "T" template property.
    if (result.type === template) {
        result.type = 'T'; // Template;
        result.base = 'T'; // Template;
        result.imports = [];
    }
    return result;
}
exports.getType = getType;
