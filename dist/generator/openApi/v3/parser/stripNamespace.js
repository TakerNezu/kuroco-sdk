"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Strip (OpenAPI) namespaces fom values.
 * @param value
 */
function stripNamespace(value) {
    return (value
        .trim()
        .replace(/^#\/components\/schemas\//, '')
        .replace(/^#\/components\/responses\//, '')
        .replace(/^#\/components\/parameters\//, '')
        .replace(/^#\/components\/examples\//, '')
        .replace(/^#\/components\/requestBodies\//, '')
        .replace(/^#\/components\/headers\//, '')
        .replace(/^#\/components\/securitySchemes\//, '')
        .replace(/^#\/components\/links\//, '')
        .replace(/^#\/components\/callbacks\//, '')
        // First we remove the namespace from template notation:
        // Example: namespace.Template[namespace.Model] -> namespace.Template[Model]
        .replace(/(\[.*\]$)/, (s) => {
        const v = s.replace('[', '').replace(']', '').split('.').pop();
        return `[${v}]`;
    })
        // Then we remove the namespace from the complete result:
        // Example: namespace.Template[Model] -> Template[Model]
        .replace(/.*/, (s) => {
        return s.split('.').pop();
    }));
}
exports.stripNamespace = stripNamespace;
