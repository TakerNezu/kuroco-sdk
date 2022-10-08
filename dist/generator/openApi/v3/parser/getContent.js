"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const constants_1 = require("./constants");
function getContent(openApi, content) {
    /* prettier-ignore */
    return (content[constants_1.ContentType.APPLICATION_JSON_PATCH] &&
        content[constants_1.ContentType.APPLICATION_JSON_PATCH].schema) || (content[constants_1.ContentType.APPLICATION_JSON] &&
        content[constants_1.ContentType.APPLICATION_JSON].schema) || (content[constants_1.ContentType.TEXT_JSON] &&
        content[constants_1.ContentType.TEXT_JSON].schema) || (content[constants_1.ContentType.TEXT_PAIN] &&
        content[constants_1.ContentType.TEXT_PAIN].schema) || (content[constants_1.ContentType.MULTIPART_MIXED] &&
        content[constants_1.ContentType.MULTIPART_MIXED].schema) || (content[constants_1.ContentType.MULTIPART_RELATED] &&
        content[constants_1.ContentType.MULTIPART_RELATED].schema) || (content[constants_1.ContentType.MULTIPART_BATCH] &&
        content[constants_1.ContentType.MULTIPART_BATCH].schema) || null;
}
exports.getContent = getContent;
