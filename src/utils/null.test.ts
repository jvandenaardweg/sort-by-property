import { isNil } from './null';

// an array of values that return true for isNil
const nilValues = [null, undefined];

// an array of values that return false for isNil
const nonNilValues = [
  0,
  1,
  2,
  '0',
  '1',
  '2',
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

describe('isNil', () => {
  it.each(nilValues)('should return true for %p', value => {
    expect(isNil(value)).toBe(true);
  });

  it.each(nonNilValues)('should return false for %p', value => {
    expect(isNil(value)).toBe(false);
  });
});
