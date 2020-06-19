"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.genReg = exports.gen = void 0;
/**
 * Generate Until Empty
 * @param func Function that will return values of {T} or ends with null or undefined
 */
function* gen(func) {
    let v = func();
    while (v !== null && v !== undefined) {
        yield v;
        v = func();
    }
}
exports.gen = gen;
/**
 * Generate Reg Until Empty
 * @param reg regexp or string, if regexp, it will be upgraded to global, lastIndex will be respected
 * @param content string to execute over
 */
function* genReg(reg, content) {
    let newReg;
    if (reg instanceof RegExp) {
        const flags = reg.flags;
        newReg = new RegExp(reg, flags.includes('g') ? flags : flags + 'g');
        newReg.lastIndex = reg.lastIndex;
    }
    else {
        newReg = new RegExp(reg, 'g');
    }
    yield* gen(() => newReg.exec(content));
}
exports.genReg = genReg;
