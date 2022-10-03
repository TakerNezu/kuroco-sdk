"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function sort(a, b) {
    const nameA = a.toLowerCase();
    const nameB = b.toLowerCase();
    return nameA.localeCompare(nameB, 'en');
}
exports.sort = sort;
