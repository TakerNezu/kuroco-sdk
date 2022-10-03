"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const postProcessModelEnum_1 = require("./postProcessModelEnum");
const postProcessModelEnums_1 = require("./postProcessModelEnums");
const postProcessModelImports_1 = require("./postProcessModelImports");
/**
 * Post process the model. this will cleanup
 * any double imports or enum values.
 * @param model
 */
function postProcessModel(model) {
    const clone = Object.assign({}, model);
    return Object.assign(Object.assign({}, clone), { imports: postProcessModelImports_1.postProcessModelImports(clone), enums: postProcessModelEnums_1.postProcessModelEnums(clone), enum: postProcessModelEnum_1.postProcessModelEnum(clone) });
}
exports.postProcessModel = postProcessModel;
