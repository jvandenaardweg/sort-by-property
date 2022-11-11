import { isNumber } from './number';

// an array of numbers that return true for isNumber
const numberValues = [0, 1, 2];

// an array of numbers that return false for isNumber
const nonNumberValues = [
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
  new Date(0),
  new Date(1),
  new Date(2),
  new Date('0'),
  new Date('1'),
  new Date('2'),
  new Date('2020-01-01'),
  new Date('2020-01-01T00:00:00.000Z'),
  new Date('2020-01-01T00:00:00.001Z'),
  BigInt(0),
  BigInt(1),
  BigInt(2),
];

describe('isNumber', () => {
  it.each(numberValues)('should return true for %p', value => {
    expect(isNumber(value)).toBe(true);
  });

  it.each(nonNumberValues)('should return false for %p', value => {
    expect(isNumber(value)).toBe(false);
  });
});
