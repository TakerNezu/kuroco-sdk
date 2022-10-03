"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const v3_1 = require("./openApi/v3");
const getOpenApiSpec_1 = require("./utils/getOpenApiSpec");
const isString_1 = require("./utils/isString");
const postProcessClient_1 = require("./utils/postProcessClient");
const readHandlebarsTemplates_1 = require("./utils/readHandlebarsTemplates");
const writeClient_1 = require("./utils/writeClient");
const __base_1 = require("../__base");
/**
 * Generate the OpenAPI client. This method will read the OpenAPI specification and based on the
 * given language it will generate the client, including the typed models, validation schemas,
 * service layer, etc.
 * @param input The relative location of the OpenAPI spec.
 * @param output The relative location of the output directory.
 * @param write Write the files to disk (true or false).
 */
function generate({ input, output, write = true, exportApiInformations = false, config }) {
    try {
        // Load the specification, load the handlebar templates for the given language
        const openApi = isString_1.isString(input) ? getOpenApiSpec_1.getOpenApiSpec(input) : input;
        const templates = readHandlebarsTemplates_1.readHandlebarsTemplates();
        const parsed = v3_1.parse(openApi);
        const client = postProcessClient_1.postProcessClient(parsed, config, exportApiInformations);
        if (write) {
            writeClient_1.writeClient(client, templates, output);
        }
        __base_1.handleSuccess(`generated at: ${output}`);
    }
    catch (e) {
        __base_1.handleError(e);
    }
}
exports.generate = generate;
