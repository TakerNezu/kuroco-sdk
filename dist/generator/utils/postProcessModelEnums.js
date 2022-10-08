"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Set unique enum values for the model
 * @param model The model that is post-processed
 */
function postProcessModelEnums(model) {
    return model.enums.filter((property, index, arr) => {
        return arr.findIndex(item => item.name === property.name) === index;
    });
}
exports.postProcessModelEnums = postProcessModelEnums;
