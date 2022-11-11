import { isBigInt } from './big-int';

// an array of BigInt's that return true for isBigInt
const bigIntValues = [BigInt(0), BigInt(1), BigInt(2)];

// an array of BigInt's that return false for isBigInt
const nonBigIntValues = [
  0,
  1,
  2,
  '0',
  '1',
  '2',
  null,
  undefined,
  false,
  true,
  {},
  [],
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  () => {},
  new Date(),
];

describe('isBigInt', () => {
  it.each(bigIntValues)('should return true for %p', value => {
    expect(isBigInt(value)).toBe(true);
  });

  it.each(nonBigIntValues)('should return false for %p', value => {
    expect(isBigInt(value)).toBe(false);
  });
});
