"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sort_1 = require("./sort");
const unique_1 = require("./unique");
/**
 * Set unique imports, sorted by name
 * @param model The model that is post-processed
 */
function postProcessModelImports(model) {
    return model.imports
        .filter(unique_1.unique)
        .sort(sort_1.sort)
        .filter(name => model.name !== name);
}
exports.postProcessModelImports = postProcessModelImports;
