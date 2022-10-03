"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const Handlebars = __importStar(require("handlebars"));
function registerHandlebarHelpers() {
    Handlebars.registerHelper('equals', function (a, b, options) {
        // @ts-ignore
        return a === b ? options.fn(this) : options.inverse(this);
    });
    Handlebars.registerHelper('notEquals', function (a, b, options) {
        // @ts-ignore
        return a !== b ? options.fn(this) : options.inverse(this);
    });
}
exports.registerHandlebarHelpers = registerHandlebarHelpers;
