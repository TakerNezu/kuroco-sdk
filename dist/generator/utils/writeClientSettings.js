"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs = __importStar(require("fs"));
const path = __importStar(require("path"));
/**
 * Generate OpenAPI configuration file "OpenAPI.ts"
 * @param client Client object, containing, models, schemas and services.
 * @param templates The loaded handlebar templates.
 * @param outputPath Directory to write the generated files to.
 */
function writeClientSettings(client, templates, outputPath) {
    fs.writeFileSync(path.resolve(outputPath, 'OpenAPI.ts'), templates.settings({
        samlUrl: `${client.server}/direct/login/saml_login/?spid=1`,
        server: client.server,
        version: client.version,
        security: client.security,
    }));
}
exports.writeClientSettings = writeClientSettings;
