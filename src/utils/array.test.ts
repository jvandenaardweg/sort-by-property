import { isArray } from './array';

// an array of values that return true for isArray
const arrayValues = [
  [],
  [0],
  [1],
  [2],
  ['0'],
  ['1'],
  ['2'],
  [null],
  [undefined],
  [false],
  [true],
  [{}],
  [[]],
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  [() => {}],
  [new Date()],
  [new Date(0)],
  [new Date(1)],
  [new Date(2)],
  [new Date('0')],
  [new Date('1')],
  [new Date('2')],
  [new Date('2020-01-01')],
  [new Date('2020-01-01T00:00:00.000Z')],
  [new Date('2020-01-01T00:00:00.001Z')],
  [BigInt(0)],
  [BigInt(1)],
  [BigInt(2)],
];

// an array of values that return false for isArray
const nonArrayValues = [
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

describe('isArray', () => {
  it.each(arrayValues)('should return true for %p', (...values) => {
    expect(isArray(values)).toBe(true);
  });

  it.each(nonArrayValues)('should return false for %p', value => {
    expect(isArray(value)).toBe(false);
  });
});
