import { isBoolean } from './boolean';

// an array of values that return true for isBoolean
const booleanValues = [true, false];

// an array of values that return false for isBoolean
const nonBooleanValues = [
  0,
  1,
  2,
  '0',
  '1',
  '2',
  {},
  [],
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  () => {},
  new Date(),
  BigInt(0),
  null,
  undefined,
];

describe('isBoolean', () => {
  it.each(booleanValues)('should return true for %p', value => {
    expect(isBoolean(value)).toBe(true);
  });

  it.each(nonBooleanValues)('should return false for %p', value => {
    expect(isBoolean(value)).toBe(false);
  });
});
