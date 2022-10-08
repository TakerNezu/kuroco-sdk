"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const constants_1 = require("./constants");
/**
 * Get mapped type for given type to any basic Typescript/Javascript type.
 */
function getMappedType(type) {
    const mapped = constants_1.TYPE_MAPPINGS.get(type.toLowerCase());
    if (mapped) {
        return mapped;
    }
    return type;
}
exports.getMappedType = getMappedType;
function hasMappedType(type) {
    return constants_1.TYPE_MAPPINGS.has(type.toLowerCase());
}
exports.hasMappedType = hasMappedType;
