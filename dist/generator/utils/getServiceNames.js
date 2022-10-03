"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sort_1 = require("./sort");
function getServiceNames(services) {
    return services.map(service => service.name).sort(sort_1.sort);
}
exports.getServiceNames = getServiceNames;
