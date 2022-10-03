"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const node_fetch_1 = __importDefault(require("node-fetch"));
function requestOpenAPI({ apiId, config }) {
    const uri = `${trimLastSlash(config.management_url)}/direct/rcms_api/openapi/?${getQuery(apiId, config.sdk_key)}`;
    return node_fetch_1.default(uri);
}
exports.requestOpenAPI = requestOpenAPI;
function requestManifest({ apiId, config }) {
    const uri = `${trimLastSlash(config.management_url)}/direct/rcms_api/manifest/?${getQuery(apiId, config.sdk_key)}`;
    return node_fetch_1.default(uri).then(res => res.json());
}
exports.requestManifest = requestManifest;
function trimLastSlash(url) {
    const h = url.trim();
    return h[h.length - 1] === '/' ? h.substr(0, h.length - 1) : h;
}
function getQuery(apiId, sdkKey) {
    const params = { api_id: apiId, _lang: 'en', sdk_key: sdkKey };
    return Object.entries(params)
        .map(([k, v]) => encodeURIComponent(k) + '=' + encodeURIComponent(v))
        .join('&');
}
