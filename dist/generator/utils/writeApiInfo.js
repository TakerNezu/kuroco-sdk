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
 * Generate Service meta informations using the Handlebar template and write to disk.
 * @param services Array of Services to write.
 * @param templates The loaded handlebar templates.
 * @param outputPath Directory to write the generated files to.
 */
function writeApiInfo(services, templates, outputPath) {
    const file = path.resolve(outputPath, `ApiInfo.ts`);
    const templateResult = templates.apiInfo({
        services,
    });
    fs.writeFileSync(file, format_1.format(templateResult));
}
exports.writeApiInfo = writeApiInfo;
