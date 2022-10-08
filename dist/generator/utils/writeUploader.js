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
const OperationPattern_1 = require("../client/interfaces/OperationPattern");
const format_1 = require("./format");
/**
 * Generate Uploader using the Handlebar template and write to disk.
 * @param client General configuration object.
 * @param templates The loaded handlebar templates.
 * @param outputPath Directory to write the generated files to.
 */
function writeUploader(client, templates, outputPath) {
    const file = path.resolve(outputPath, `Uploader.ts`);
    const templateResult = templates.uploadHelper({
        firebaseConfig: client.etc.kurocoConfig.gcp.firebaseConfig,
        firebaseTokenApi: client.etc.specialOperation[OperationPattern_1.OPERATION_PATTERN.FIREBASE_TOKEN],
    });
    fs.writeFileSync(file, format_1.format(templateResult));
}
exports.writeUploader = writeUploader;
