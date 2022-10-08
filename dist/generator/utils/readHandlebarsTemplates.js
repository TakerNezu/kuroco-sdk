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
const path = __importStar(require("path"));
const fs = __importStar(require("fs"));
const readHandlebarsTemplate_1 = require("./readHandlebarsTemplate");
const registerHandlebarHelpers_1 = require("./registerHandlebarHelpers");
function resolveTemplate(filePath) {
    // TODO: add-hock fixing. to prevent runtime error on running actual index.js & test,
    // because those have different base path.
    const fromJS = path.resolve(__dirname, `../../../src/generator/templates/${filePath}`);
    const fromTS = path.resolve(__dirname, `../templates/${filePath}`);
    const p = fs.existsSync(fromJS) ? fromJS : fromTS;
    return path.resolve(__dirname, p);
}
/**
 * Read all the Handlebar templates that we need and return on wrapper object
 * so we can easily access the templates in out generator / write functions.
 */
function readHandlebarsTemplates() {
    registerHandlebarHelpers_1.registerHandlebarHelpers();
    const templates = {
        index: readHandlebarsTemplate_1.readHandlebarsTemplate(resolveTemplate('index.hbs')),
        model: readHandlebarsTemplate_1.readHandlebarsTemplate(resolveTemplate('model.hbs')),
        schema: readHandlebarsTemplate_1.readHandlebarsTemplate(resolveTemplate('schema.hbs')),
        service: readHandlebarsTemplate_1.readHandlebarsTemplate(resolveTemplate('service.hbs')),
        settings: readHandlebarsTemplate_1.readHandlebarsTemplate(resolveTemplate('core/OpenAPI.hbs')),
        apiInfo: readHandlebarsTemplate_1.readHandlebarsTemplate(resolveTemplate('core/ApiInfo.hbs')),
        auth: readHandlebarsTemplate_1.readHandlebarsTemplate(resolveTemplate('core/Auth.hbs')),
        uploadHelper: readHandlebarsTemplate_1.readHandlebarsTemplate(resolveTemplate('core/Uploader.hbs')),
        firebaseUtil: readHandlebarsTemplate_1.readHandlebarsTemplate(resolveTemplate('core/FirebaseUtil.hbs')),
    };
    const partials = [
        'exportEnum.hbs',
        'exportInterface.hbs',
        'exportType.hbs',
        'extends.hbs',
        'isNullable.hbs',
        'isReadOnly.hbs',
        'isRequired.hbs',
        'parameters.hbs',
        'result.hbs',
        'schema.hbs',
        'schemaArray.hbs',
        'schemaDictionary.hbs',
        'schemaEnum.hbs',
        'schemaGeneric.hbs',
        'schemaInterface.hbs',
        'type.hbs',
        'typeArray.hbs',
        'typeDictionary.hbs',
        'typeEnum.hbs',
        'typeGeneric.hbs',
        'typeInterface.hbs',
        'typeReference.hbs',
    ];
    partials.forEach(partial => {
        const templatePath = resolveTemplate(`partials/${partial}`);
        const templateName = path.basename(partial, '.hbs');
        const template = readHandlebarsTemplate_1.readHandlebarsTemplate(templatePath);
        Handlebars.registerPartial(templateName, template);
    });
    return templates;
}
exports.readHandlebarsTemplates = readHandlebarsTemplates;
