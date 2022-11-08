import { isDate } from './date';

describe('isDate', () => {
  it('should return true if given a Date object', () => {
    const result = isDate(new Date());
    const expected = true;

    expect(result).toBe(expected);
  });

  it('should return true if given a date object with a defined date string', () => {
    const result = isDate(new Date('2021-12-31'));
    const expected = true;

    expect(result).toBe(expected);
  });

  it('should return false if given "2021-12-31"', () => {
    const result = isDate('2021-12-31');
    const expected = false;

    expect(result).toBe(expected);
  });

  it('should return false if given 0', () => {
    const result = isDate(0);
    const expected = false;

    expect(result).toBe(expected);
  });

  it('should return false if given 1', () => {
    const result = isDate(1);
    const expected = false;

    expect(result).toBe(expected);
  });

  it('should return false if given true', () => {
    const result = isDate(true);
    const expected = false;

    expect(result).toBe(expected);
  });

  it('should return false if given NaN', () => {
    const result = isDate(NaN);
    const expected = false;

    expect(result).toBe(expected);
  });
});
