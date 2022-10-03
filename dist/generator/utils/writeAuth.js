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
function writeAuth(services, templates, outputPath) {
    const file = path.resolve(outputPath, `Auth.ts`);
    function pickSpecialOperation(type) {
        const service = services.find(s => s.operations.some(o => o.type === type));
        if (!service) {
            return null;
        }
        const operation = service.operations.find(o => o.type === type);
        if (!operation) {
            return null;
        }
        return Object.assign(Object.assign({}, operation), { class: service.name, className: service.name, method: `${service.name}.${operation.name}`, methodName: operation.name });
    }
    const operations = {
        login: pickSpecialOperation('LOGIN'),
        logout: pickSpecialOperation('LOGOUT'),
        token: pickSpecialOperation('TOKEN'),
    };
    let importer = Object.values(operations)
        .filter(v => v !== null)
        .map(v => v.class);
    const uniq = (array) => [...new Set(array)];
    importer = uniq(importer);
    const templateResult = templates.auth({
        importer,
        operations,
    });
    fs.writeFileSync(file, format_1.format(templateResult), () => {});
}
exports.writeAuth = writeAuth;
