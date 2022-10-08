"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = __importDefault(require("path"));
const fs = __importStar(require("fs-extra"));
const swagger_parser_1 = __importDefault(require("swagger-parser"));
const API = __importStar(require("./api"));
const __base_1 = require("../__base");
function pull(options) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield writeRcmsFilesWithFetch(options);
            yield overwriteConfigurationFile(options);
            __base_1.handleSuccess(`The OpenAPI definition on Kuroco was exported at ${options.output}`);
        }
        catch (e) {
            __base_1.handleError(e);
        }
    });
}
exports.pull = pull;
function writeRcmsFilesWithFetch(options) {
    return __awaiter(this, void 0, void 0, function* () {
        if (!fs.existsSync(path_1.default.dirname(options.output))) {
            throw Error(`Could not find directory : ${options.output}`);
        }
        const res = yield API.requestOpenAPI(options);
        if (!res.ok && res.status === 401) {
            throw Error('the server responsed as unautorized, please check your SDK key.');
        }
        const json = (yield res.json());
        const openapi = json.openapi_data;
        // hooks validation to openapi.json, this throw an Error whrn occurs invalidations.
        new swagger_parser_1.default().bundle(openapi);
        if (options.write) {
            fs.writeJSONSync(options.output, openapi, {
                spaces: '\t',
                encoding: 'UTF-8',
                flag: 'w',
            });
        }
    });
}
exports.writeRcmsFilesWithFetch = writeRcmsFilesWithFetch;
function overwriteConfigurationFile(options) {
    return __awaiter(this, void 0, void 0, function* () {
        const manifest = yield API.requestManifest(options);
        const configuration = Object.assign(Object.assign({}, options.config), manifest);
        const output = path_1.default.resolve(process.cwd(), 'kuroco.config.json');
        fs.writeJSONSync(output, configuration, {
            spaces: '\t',
            encoding: 'UTF-8',
            flag: 'w',
        });
    });
}
exports.overwriteConfigurationFile = overwriteConfigurationFile;
