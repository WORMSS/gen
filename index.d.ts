/**
 * Generate Until Empty
 * @param func Function that will return values of {T} or ends with null or undefined
 */
export declare function gen<T>(func: () => T): Generator<Exclude<T, null | undefined>, void, unknown>;
/**
 * Generate Reg Until Empty
 * @param reg regexp or string, if regexp, it will be upgraded to global, lastIndex will be respected
 * @param content string to execute over
 */
export declare function genReg(reg: string | RegExp, content: string): Generator<RegExpExecArray, void, unknown>;
