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
const getModelNames_1 = require("./getModelNames");
const getServiceNames_1 = require("./getServiceNames");
/**
 * Generate the OpenAPI client index file using the Handlebar template and write it to disk.
 * The index file just contains all the exports you need to use the client as a standalone
 * library. But yuo can also import individual models and services directly.
 * @param client Client object, containing, models, schemas and services.
 * @param templates The loaded handlebar templates.
 * @param outputPath Directory to write the generated files to.
 * @param exportCondition Containing some conditions Object, each of values indicates either exports.
 */
function writeClientIndex(client, templates, outputPath, exportCondition) {
    fs.writeFileSync(path.resolve(outputPath, 'index.ts'), templates.index({
        server: client.server,
        version: client.version,
        models: getModelNames_1.getModelNames(client.models),
        services: getServiceNames_1.getServiceNames(client.services),
        exportCondition,
    }));
}
exports.writeClientIndex = writeClientIndex;
