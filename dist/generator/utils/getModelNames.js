"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sort_1 = require("./sort");
function getModelNames(models) {
    return models.map(model => model.name).sort(sort_1.sort);
}
exports.getModelNames = getModelNames;
