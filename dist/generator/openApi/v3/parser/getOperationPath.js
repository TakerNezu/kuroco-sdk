"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const getOperationParameterName_1 = require("./getOperationParameterName");
/**
 * Get the final service path, this replaces the "{api-version}" placeholder
 * with a new template string placeholder so we can dynamically inject the
 * OpenAPI version without the need to hardcode this in the URL.
 * Plus we return the correct parameter names to replace in the URL.
 * @param path
 */
function getOperationPath(path) {
    return path
        .replace(/\{(.*?)\}/g, (_, w) => {
        return `\${requestParam.${getOperationParameterName_1.getOperationParameterName(w)}}`;
    })
        .replace('${apiVersion}', '${OpenAPI.VERSION}');
}
exports.getOperationPath = getOperationPath;
