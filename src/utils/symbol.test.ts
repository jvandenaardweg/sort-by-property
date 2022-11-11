import { isSymbol } from './symbol';

// an array of values that return true for isSymbol
const symbolValues = [Symbol('a'), Symbol('b'), Symbol('c')];

// an array of values that return false for isSymbol
const nonSymbolValues = [
  undefined,
  null,
  NaN,
  0,
  1,
  2,
  'a',
  'b',
  'c',
  [],
  {},
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  () => {},
  true,
  false,
  new Date(),
  new Error(),
  /a/,
  new Set(),
  new Map(),
  new WeakSet(),
  new WeakMap(),
  new ArrayBuffer(2),
  new Int8Array(),
  new Uint8Array(),
  new Uint8ClampedArray(),
  new Int16Array(),
  new Uint16Array(),
  new Int32Array(),
  new Uint32Array(),
  new Float32Array(),
  new Float64Array(),
  new BigInt64Array(),
  new BigUint64Array(),
];

describe('isSymbol', () => {
  it.each(symbolValues)('should return true for %p', value => {
    expect(isSymbol(value)).toBe(true);
  });

  it.each(nonSymbolValues)('should return false for %p', value => {
    expect(isSymbol(value)).toBe(false);
  });
});
