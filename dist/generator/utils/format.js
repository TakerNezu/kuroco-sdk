"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const os_1 = require("os");
function format(s) {
    let indent = 0;
    let lines = s.split(os_1.EOL);
    lines = lines.map(line => {
        line = line.trim().replace(/^\*/g, ' *');
        let i = indent;
        if (line.endsWith('(') || line.endsWith('{') || line.endsWith('[')) {
            indent++;
        }
        if ((line.startsWith(')') || line.startsWith('}') || line.startsWith(']')) && i) {
            indent--;
            i--;
        }
        const result = `${'    '.repeat(i)}${line}`;
        if (result.trim() === '') {
            return '';
        }
        return result;
    });
    return lines.join(os_1.EOL);
}
exports.format = format;
