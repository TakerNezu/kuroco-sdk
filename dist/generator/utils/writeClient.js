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
const mkdirp = __importStar(require("mkdirp"));
const path = __importStar(require("path"));
const rimraf = __importStar(require("rimraf"));
const writeApiInfo_1 = require("./writeApiInfo");
const writeAuth_1 = require("./writeAuth");
const writeClientIndex_1 = require("./writeClientIndex");
const writeClientModels_1 = require("./writeClientModels");
const writeClientSchemas_1 = require("./writeClientSchemas");
const writeClientServices_1 = require("./writeClientServices");
const writeClientSettings_1 = require("./writeClientSettings");
const writeUploader_1 = require("./writeUploader");
const writeFirebaseUtil_1 = require("./writeFirebaseUtil");
const OperationPattern_1 = require("../client/interfaces/OperationPattern");
const pickSpecialOperation_1 = require("./pickSpecialOperation");
function copySupportFile(filePath, outputPath) {
    // TODO: add-hock fixing. to prevent runtime error on running actual index.js & test,
    // because those have different base path.
    const fromJS = path.resolve(__dirname, `../../../src/generator/templates/${filePath}`);
    const fromTS = path.resolve(__dirname, `../templates/${filePath}`);
    const p = fs.existsSync(fromJS) ? fromJS : fromTS;
    fs.copyFileSync(path.resolve(__dirname, p), path.resolve(outputPath, filePath));
}
/**
 * Write our OpenAPI client, using the given templates at the given output path.
 * @param client Client object with all the models, services, etc.
 * @param templates Templates wrapper with all loaded Handlebars templates.
 * @param output Directory to write the generated files to.
 */
function writeClient(client, templates, output) {
    const outputPath = path.resolve(process.cwd(), output);
    const outputPathCore = path.resolve(outputPath, 'core');
    const outputPathModels = path.resolve(outputPath, 'models');
    const outputPathSchemas = path.resolve(outputPath, 'schemas');
    const outputPathServices = path.resolve(outputPath, 'services');
    const exportCondition = getCondition(client);
    // Clean output directory
    rimraf.sync(outputPath);
    mkdirp.sync(outputPath);
    mkdirp.sync(outputPathCore);
    copySupportFile('core/ApiError.ts', outputPath);
    copySupportFile('core/getFormData.ts', outputPath);
    copySupportFile('core/getQueryString.ts', outputPath);
    copySupportFile('core/isSuccess.ts', outputPath);
    copySupportFile('core/request.ts', outputPath);
    copySupportFile('core/RequestOptions.ts', outputPath);
    copySupportFile('core/requestUsingFetch.ts', outputPath);
    copySupportFile('core/Result.ts', outputPath);
    copySupportFile('core/LocalStorage.ts', outputPath);
    writeClientSettings_1.writeClientSettings(client, templates, outputPathCore);
    writeAuth_1.writeAuth(client.services, templates, outputPathCore);
    if (exportCondition.apiInformations) {
        writeApiInfo_1.writeApiInfo(client.services, templates, outputPathCore);
    }
    if (exportCondition.firebase) {
        writeFirebaseUtil_1.writeFirebaseUtil(client, templates, outputPathCore);
    }
    if (exportCondition.uploader) {
        writeUploader_1.writeUploader(client, templates, outputPathCore);
    }
    mkdirp.sync(outputPathServices);
    writeClientServices_1.writeClientServices(client, templates, outputPathServices);
    mkdirp.sync(outputPathSchemas);
    writeClientSchemas_1.writeClientSchemas(client.models, templates, outputPathSchemas);
    mkdirp.sync(outputPathModels);
    copySupportFile('models/Dictionary.ts', outputPath);
    writeClientModels_1.writeClientModels(client.models, templates, outputPathModels);
    writeClientIndex_1.writeClientIndex(client, templates, outputPath, exportCondition);
}
exports.writeClient = writeClient;
function getCondition(client) {
    const gcp = (client.etc.kurocoConfig || {}).gcp;
    const firebaseConfig = (gcp || {}).firebaseConfig || null;
    const firebaseTokenApi = pickSpecialOperation_1.pickSpecialOperation(client.services, OperationPattern_1.OPERATION_PATTERN.FIREBASE_TOKEN);
    return {
        firebase: firebaseConfig !== null,
        uploader: firebaseConfig !== null && firebaseTokenApi ? true : false,
        apiInformations: client.etc.exportApiInformations || false,
    };
}
