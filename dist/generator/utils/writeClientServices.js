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
const format_1 = require("./format");
/**
 * Generate Services using the Handlebar template and write to disk.
 * @param client General configuration object.
 * @param templates The loaded handlebar templates.
 * @param outputPath Directory to write the generated files to.
 * @param exportApiInformations Generate API informations.
 */
function writeClientServices(client, templates, outputPath, exportApiInformations = false) {
    client.services.forEach(service => {
        const file = path.resolve(outputPath, `${service.name}.ts`);
        const templateResult = templates.service(Object.assign({ exportApiInformations: client.etc.exportApiInformations }, service));
        fs.writeFileSync(file, format_1.format(templateResult));
    });
}
exports.writeClientServices = writeClientServices;
