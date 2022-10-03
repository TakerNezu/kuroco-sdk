"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const OperationPattern_1 = require("../../../client/interfaces/OperationPattern");
/**
 * Get operation type. returns a value to get whether this target operation shuold be special process.
 * @param pathSummary
 * @note here 'pathSummary' is not 'summary' in operation, should be set from path object.
 */
function getOperationType(pathSummary = '') {
    if (pathSummary === '') {
        return null;
    }
    function isMatchAll(moduleNames) {
        return moduleNames.split(':').every(moduleName => pathSummary.includes(moduleName));
    }
    if (isMatchAll('login:1:Login:login_challenge')) {
        return OperationPattern_1.OPERATION_PATTERN.LOGIN;
    }
    if (isMatchAll('login:1:Login:logout')) {
        return OperationPattern_1.OPERATION_PATTERN.LOGOUT;
    }
    if (isMatchAll('login:1:Login:token')) {
        return OperationPattern_1.OPERATION_PATTERN.TOKEN;
    }
    if (isMatchAll('login:1:Login:firebaseToken')) {
        return OperationPattern_1.OPERATION_PATTERN.FIREBASE_TOKEN;
    }
    return null;
}
exports.getOperationType = getOperationType;
