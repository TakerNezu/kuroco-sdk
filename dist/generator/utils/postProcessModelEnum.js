"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Set unique enum values for the model
 * @param model
 */
function postProcessModelEnum(model) {
    return model.enum.filter((property, index, arr) => {
        return arr.findIndex(item => item.name === property.name) === index;
    });
}
exports.postProcessModelEnum = postProcessModelEnum;
