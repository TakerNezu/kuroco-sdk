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
const Handlebars = __importStar(require("handlebars"));
/**
 * Read and compile the Handlebars template.
 * @param filePath
 */
function readHandlebarsTemplate(filePath) {
    const template = fs.readFileSync(filePath, 'utf8').toString().trim();
    return Handlebars.compile(template, {
        strict: true,
        noEscape: true,
        preventIndent: true,
        knownHelpersOnly: true,
        knownHelpers: {
            equals: true,
            notEquals: true,
        },
    });
}
exports.readHandlebarsTemplate = readHandlebarsTemplate;
