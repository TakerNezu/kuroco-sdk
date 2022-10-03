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
 * Generate Schemas using the Handlebar template and write to disk.
 * @param models Array of Models to write.
 * @param templates The loaded handlebar templates.
 * @param outputPath Directory to write the generated files to.
 */
function writeClientSchemas(models, templates, outputPath) {
    models.forEach(model => {
        const file = path.resolve(outputPath, `$${model.name}.ts`);
        const templateResult = templates.schema(model);
        fs.writeFileSync(file, format_1.format(templateResult), () => {});
    });
}
exports.writeClientSchemas = writeClientSchemas;
