import { isDate } from './date';

// an array of dates that return true for isDate
const dateValues = [
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
];

// an array of values that return false for isDate
const nonDateValues = [
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
];

describe('isDate', () => {
  it.each(dateValues)('should return true for %p', value => {
    expect(isDate(value)).toBe(true);
  });

  it.each(nonDateValues)('should return false for %p', value => {
    expect(isDate(value)).toBe(false);
  });
});
