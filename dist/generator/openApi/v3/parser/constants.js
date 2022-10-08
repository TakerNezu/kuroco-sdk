"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PrimaryType;
(function (PrimaryType) {
    PrimaryType["FILE"] = "File";
    PrimaryType["OBJECT"] = "any";
    PrimaryType["ARRAY"] = "any[]";
    PrimaryType["BOOLEAN"] = "boolean";
    PrimaryType["NUMBER"] = "number";
    PrimaryType["STRING"] = "string";
    PrimaryType["VOID"] = "void";
    PrimaryType["NULL"] = "null";
})(PrimaryType = exports.PrimaryType || (exports.PrimaryType = {}));
exports.TYPE_MAPPINGS = new Map([
    ['file', PrimaryType.FILE],
    ['any', PrimaryType.OBJECT],
    ['object', PrimaryType.OBJECT],
    ['array', PrimaryType.ARRAY],
    ['boolean', PrimaryType.BOOLEAN],
    ['byte', PrimaryType.NUMBER],
    ['int', PrimaryType.NUMBER],
    ['int32', PrimaryType.NUMBER],
    ['int64', PrimaryType.NUMBER],
    ['integer', PrimaryType.NUMBER],
    ['float', PrimaryType.NUMBER],
    ['double', PrimaryType.NUMBER],
    ['short', PrimaryType.NUMBER],
    ['long', PrimaryType.NUMBER],
    ['number', PrimaryType.NUMBER],
    ['char', PrimaryType.STRING],
    ['date', PrimaryType.STRING],
    ['date-time', PrimaryType.STRING],
    ['password', PrimaryType.STRING],
    ['string', PrimaryType.STRING],
    ['void', PrimaryType.VOID],
    ['null', PrimaryType.NULL],
]);
var Method;
(function (Method) {
    Method["GET"] = "get";
    Method["PUT"] = "put";
    Method["POST"] = "post";
    Method["DELETE"] = "delete";
    Method["OPTIONS"] = "options";
    Method["HEAD"] = "head";
    Method["PATCH"] = "patch";
})(Method = exports.Method || (exports.Method = {}));
var ContentType;
(function (ContentType) {
    ContentType["APPLICATION_JSON_PATCH"] = "application/json-patch+json";
    ContentType["APPLICATION_JSON"] = "application/json";
    ContentType["TEXT_JSON"] = "text/json";
    ContentType["TEXT_PAIN"] = "text/plain";
    ContentType["MULTIPART_MIXED"] = "multipart/mixed";
    ContentType["MULTIPART_RELATED"] = "multipart/related";
    ContentType["MULTIPART_BATCH"] = "multipart/batch";
})(ContentType = exports.ContentType || (exports.ContentType = {}));
