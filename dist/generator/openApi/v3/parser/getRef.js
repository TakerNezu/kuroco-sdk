"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function getRef(openApi, item) {
    if (item.$ref) {
        // Fetch the paths to the definitions, this converts:
        // "#/definitions/Form" to ["definitions", "Form"]
        const paths = item.$ref
            .replace(/^#/g, '')
            .split('/')
            .filter(item => item);
        // Try to find the reference by walking down the path,
        // if we cannot find it, then we throw an error.
        let result = openApi;
        paths.forEach((path) => {
            if (result.hasOwnProperty(path)) {
                result = result[path];
            }
            else {
                throw new Error(`Could not find reference: "${item.$ref}"`);
            }
        });
        return result;
    }
    return item;
}
exports.getRef = getRef;
