"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Convert the service version to 'normal' version.
 * This basically removes any "v" prefix from the version string.
 * @param version
 */
function getServiceVersion(version = '1.0') {
    return version.replace(/^v/gi, '');
}
exports.getServiceVersion = getServiceVersion;
