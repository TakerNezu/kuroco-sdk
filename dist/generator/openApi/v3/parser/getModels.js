"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const getModel_1 = require("./getModel");
const getType_1 = require("./getType");
function getModels(openApi) {
    const models = [];
    if (openApi.components) {
        for (const definitionName in openApi.components.schemas) {
            if (openApi.components.schemas.hasOwnProperty(definitionName)) {
                const definition = openApi.components.schemas[definitionName];
                const definitionType = getType_1.getType(definitionName);
                const model = getModel_1.getModel(openApi, definition, true, definitionType.base);
                models.push(model);
            }
        }
    }
    return models;
}
exports.getModels = getModels;
