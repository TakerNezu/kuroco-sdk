"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const constants_1 = require("./constants");
function getEnum(values) {
    if (Array.isArray(values)) {
        return values
            .filter((value, index, arr) => {
            return arr.indexOf(value) === index;
        })
            .map(value => {
            if (typeof value === 'number') {
                return {
                    name: `NUM_${value}`,
                    value: String(value),
                    type: constants_1.PrimaryType.NUMBER,
                    description: null,
                };
            }
            return {
                name: value.replace(/([a-z])([A-Z]+)/g, '$1_$2').toUpperCase(),
                value: `'${value}'`,
                type: constants_1.PrimaryType.STRING,
                description: null,
            };
        });
    }
    return [];
}
exports.getEnum = getEnum;
