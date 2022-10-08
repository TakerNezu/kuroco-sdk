"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const KEY_ENUM_NAMES = 'x-enum-varnames';
const KEY_ENUM_DESCRIPTIONS = 'x-enum-descriptions';
/**
 * Extend the enum with the x-enum properties. This adds the capability
 * to use names and descriptions inside the generated enums.
 * @param enumerators
 * @param definition
 */
function extendEnum(enumerators, definition) {
    const names = definition[KEY_ENUM_NAMES];
    const descriptions = definition[KEY_ENUM_DESCRIPTIONS];
    return enumerators.map((enumerator, index) => ({
        name: (names && names[index]) || enumerator.name,
        description: (descriptions && descriptions[index]) || enumerator.description,
        value: enumerator.value,
        type: enumerator.type,
    }));
}
exports.extendEnum = extendEnum;
