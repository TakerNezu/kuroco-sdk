"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Pick special operations
 * @param services Service objects.
 */
function pickSpecialOperation(services = [], type) {
    const service = services.find(s => s.operations.some(o => o.type === type));
    if (!service) {
        return null;
    }
    const operation = service.operations.find(o => o.type === type);
    if (!operation) {
        return null;
    }
    return Object.assign(Object.assign({}, operation), { class: service.name, className: service.name, method: `${service.name}.${operation.name}`, methodName: operation.name });
}
exports.pickSpecialOperation = pickSpecialOperation;
