"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function sortByRequired(a, b) {
    return a.isRequired && !b.isRequired ? -1 : !a.isRequired && b.isRequired ? 1 : 0;
}
exports.sortByRequired = sortByRequired;
