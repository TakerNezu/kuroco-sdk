"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Get the service operation name fallback.
 * @param strs
 */
function getOperationNameFallback(strs) {
    const rtn = strs
        .map(str => str
        .replace(/\{(.*?)\}/g, (_, w) => w)
        .split(/\/| |-|_|\./g)
        .map(s => s.charAt(0).toUpperCase() + s.slice(1))
        .join(''))
        .join('');
    return rtn.charAt(0).toLowerCase() + rtn.slice(1);
}
exports.getOperationNameFallback = getOperationNameFallback;
