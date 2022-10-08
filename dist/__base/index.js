"use strict";
/**
 * this file is a definition which is supposed to be used anywhere.
 */
Object.defineProperty(exports, "__esModule", { value: true });
/** handler with exporting success message on succeeded */
function handleSuccess(...msgs) {
    log([Font.FgGreen, Font.Bright], `Process was succeeded.`);
    msgs.forEach(msg => log([Font.FgGreen], msg));
}
exports.handleSuccess = handleSuccess;
/** handler with exporting success message on error occured */
function handleError(e) {
    log([Font.FgRed, Font.Bright], `Process was failed.`);
    log([Font.FgRed], `${e}`);
    process.exitCode = 1;
}
exports.handleError = handleError;
function log(fonts, ...msgs) {
    console.log(`${fonts.join('')}%s${Font.Reset}`, msgs.join('\n'));
}
/**
 * font configuration on CLI.
 * @see https://stackoverflow.com/a/41407246
 */
var Font;
(function (Font) {
    Font["Reset"] = "\u001B[0m";
    Font["Bright"] = "\u001B[1m";
    Font["Dim"] = "\u001B[2m";
    Font["Underscore"] = "\u001B[4m";
    Font["Blink"] = "\u001B[5m";
    Font["Reverse"] = "\u001B[7m";
    Font["Hidden"] = "\u001B[8m";
    Font["FgBlack"] = "\u001B[30m";
    Font["FgRed"] = "\u001B[31m";
    Font["FgGreen"] = "\u001B[32m";
    Font["FgYellow"] = "\u001B[33m";
    Font["FgBlue"] = "\u001B[34m";
    Font["FgMagenta"] = "\u001B[35m";
    Font["FgCyan"] = "\u001B[36m";
    Font["FgWhite"] = "\u001B[37m";
    Font["BgBlack"] = "\u001B[40m";
    Font["BgRed"] = "\u001B[41m";
    Font["BgGreen"] = "\u001B[42m";
    Font["BgYellow"] = "\u001B[43m";
    Font["BgBlue"] = "\u001B[44m";
    Font["BgMagenta"] = "\u001B[45m";
    Font["BgCyan"] = "\u001B[46m";
    Font["BgWhite"] = "\u001B[47m";
})(Font || (Font = {}));
