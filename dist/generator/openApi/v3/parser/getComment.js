"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const os_1 = require("os");
/**
 * Cleanup comment and prefix multiline comments with "*",
 * so they look a bit nicer when used in the generated code.
 * @param comment
 */
function getComment(comment) {
    if (comment) {
        return comment.replace(/\r?\n(.*)/g, (_, w) => `${os_1.EOL} * ${w.trim()}`);
    }
    return null;
}
exports.getComment = getComment;
