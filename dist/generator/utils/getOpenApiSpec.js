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
 * Check if given file exists and try to read the content as string.
 * @param filePath
 */
function read(filePath) {
    if (fs.existsSync(filePath)) {
        try {
            return fs.readFileSync(filePath, 'utf8').toString();
        }
        catch (e) {
            throw new Error(`Could not read OpenApi spec: "${filePath}"`);
        }
    }
    throw new Error(`Could not find OpenApi spec: "${filePath}"`);
}
/**
 * Load and parse to open api spec (JSON format only supported).
 * @param input
 */
function getOpenApiSpec(input) {
    const file = path.resolve(process.cwd(), input);
    const content = read(file);
    try {
        return JSON.parse(content);
    }
    catch (e) {
        throw new Error(`Could not parse OpenApi JSON: "${file}"`);
    }
}
exports.getOpenApiSpec = getOpenApiSpec;
