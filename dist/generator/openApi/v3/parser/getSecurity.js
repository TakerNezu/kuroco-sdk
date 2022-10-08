"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Get Security schemas.
 * @param openApi
 */
function getSecurity(openApi) {
    let security = {};
    if (openApi.components) {
        for (const definitionName in openApi.components.securitySchemes) {
            if (openApi.components.securitySchemes.hasOwnProperty(definitionName)) {
                security = Object.assign(Object.assign({}, security), { [definitionName]: openApi.components.securitySchemes[definitionName] });
            }
        }
    }
    return security;
}
exports.getSecurity = getSecurity;
