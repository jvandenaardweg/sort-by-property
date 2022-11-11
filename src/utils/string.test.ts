import { isString } from './string';

// an array of values that return true for isString
const stringValues = [
  '',
  '0',
  '1',
  '2',
  '2020-01-01',
  '2020-01-01T00:00:00.000Z',
  '2020-01-01T00:00:00.001Z',
];

// an array of values that return false for isString
const nonStringValues = [
  0,
  1,
  2,
  null,
  undefined,
  false,
  true,
  {},
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

describe('isString', () => {
  it.each(stringValues)('should return true for %p', value => {
    expect(isString(value)).toBe(true);
  });

  it.each(nonStringValues)('should return false for %p', value => {
    expect(isString(value)).toBe(false);
  });
});
