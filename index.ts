/**
 * Generate Until Empty
 * @param func Function that will return values of {T} or ends with null or undefined
 */
export function* gen<T>(func: () => T): Generator<Exclude<T, null | undefined>, void, unknown> {
  let v = func();
  while (v !== null && v !== undefined) {
    yield v as Exclude<T, null | undefined>;
    v = func();
  }
}
/**
 * Generate Reg Until Empty
 * @param reg regexp or string, if regexp, it will be upgraded to global, lastIndex will be respected
 * @param content string to execute over
 */
export function* genReg(
  reg: string | RegExp,
  content: string,
): Generator<RegExpExecArray, void, unknown> {
  let newReg: RegExp;
  if (reg instanceof RegExp) {
    const flags = reg.flags;
    newReg = new RegExp(reg, flags.includes('g') ? flags : flags + 'g');
    newReg.lastIndex = reg.lastIndex;
  } else {
    newReg = new RegExp(reg, 'g');
  }
  yield* gen(() => newReg.exec(content));
}
