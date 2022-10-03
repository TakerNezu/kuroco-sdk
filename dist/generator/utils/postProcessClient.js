"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const OperationPattern_1 = require("../client/interfaces/OperationPattern");
const postProcessModel_1 = require("./postProcessModel");
const pickSpecialOperation_1 = require("./pickSpecialOperation");
/**
 * Post process client
 * @param client Client object with all the models, services, etc.
 * @param kurocoConfig Etc Kuroco configurations passed by Kuroco.
 * @param exportApiInformations Whether or not to export details of each API endpoints.
 */
function postProcessClient(client, kurocoConfig, exportApiInformations = false) {
    const specialOperation = {
        [OperationPattern_1.OPERATION_PATTERN.LOGIN]: pickSpecialOperation_1.pickSpecialOperation(client.services, OperationPattern_1.OPERATION_PATTERN.LOGIN),
        [OperationPattern_1.OPERATION_PATTERN.LOGOUT]: pickSpecialOperation_1.pickSpecialOperation(client.services, OperationPattern_1.OPERATION_PATTERN.LOGOUT),
        [OperationPattern_1.OPERATION_PATTERN.TOKEN]: pickSpecialOperation_1.pickSpecialOperation(client.services, OperationPattern_1.OPERATION_PATTERN.TOKEN),
        [OperationPattern_1.OPERATION_PATTERN.FIREBASE_TOKEN]: pickSpecialOperation_1.pickSpecialOperation(client.services, OperationPattern_1.OPERATION_PATTERN.FIREBASE_TOKEN),
    };
    return Object.assign(Object.assign({}, client), { models: client.models.map(model => postProcessModel_1.postProcessModel(model)), etc: {
            specialOperation,
            kurocoConfig,
            exportApiInformations,
        } });
}
exports.postProcessClient = postProcessClient;
