"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const constants_1 = require("./constants");
const getOperation_1 = require("./getOperation");
/**
 * Get the OpenAPI services
 */
function getServices(openApi) {
    const services = new Map();
    for (const url in openApi.paths) {
        if (openApi.paths.hasOwnProperty(url)) {
            const path = openApi.paths[url];
            for (const method in path) {
                if (path.hasOwnProperty(method)) {
                    switch (method) {
                        case constants_1.Method.GET:
                        case constants_1.Method.PUT:
                        case constants_1.Method.POST:
                        case constants_1.Method.DELETE:
                        case constants_1.Method.OPTIONS:
                        case constants_1.Method.HEAD:
                        case constants_1.Method.PATCH:
                            // Each method contains an OpenAPI operation, we parse the operation
                            const op = path[method];
                            const operation = getOperation_1.getOperation(openApi, url, method, op, path);
                            // If we have already declared a service, then we should fetch that and
                            // append the new method to it. Otherwise we should create a new service object.
                            const service = services.get(operation.service) ||
                                {
                                    name: operation.service,
                                    operations: [],
                                    imports: [],
                                };
                            // Push the operation in the service
                            service.operations.push(operation);
                            service.imports.push(...operation.imports);
                            services.set(operation.service, service);
                            break;
                    }
                }
            }
        }
    }
    return Array.from(services.values());
}
exports.getServices = getServices;
