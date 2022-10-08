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
 * Generate Firebase utility/initializer
 * @param client General configuration object.
 * @param templates The loaded handlebar templates.
 * @param outputPath Directory to write the generated files to.
 */
function writeFirebaseUtil(client, templates, outputPath) {
    const file = path.resolve(outputPath, `FirebaseUtil.ts`);
    const templateResult = templates.firebaseUtil({
        firebaseConfig: client.etc.kurocoConfig.gcp.firebaseConfig,
    });
    fs.writeFileSync(file, format_1.format(templateResult));
}
exports.writeFirebaseUtil = writeFirebaseUtil;
