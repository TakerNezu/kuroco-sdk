"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const getModels_1 = require("./parser/getModels");
const getSecurity_1 = require("./parser/getSecurity");
const getServer_1 = require("./parser/getServer");
const getServices_1 = require("./parser/getServices");
const getServiceVersion_1 = require("./parser/getServiceVersion");
/**
 * Parse the OpenAPI specification to a Client model that contains
 * all the models, services and schema's we should output.
 * @param openApi The OpenAPI spec  that we have loaded from disk.
 */
function parse(openApi) {
    const version = getServiceVersion_1.getServiceVersion(openApi.info.version);
    const server = getServer_1.getServer(openApi);
    const models = getModels_1.getModels(openApi);
    const services = getServices_1.getServices(openApi);
    const security = getSecurity_1.getSecurity(openApi);
    return { version, server, models, services, security };
}
exports.parse = parse;
