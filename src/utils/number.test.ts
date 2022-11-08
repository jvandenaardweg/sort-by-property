import { isNumber } from './number';

describe('isNumber', () => {
  it('should return true if given 0', () => {
    const result = isNumber(0);
    const expected = true;

    expect(result).toBe(expected);
  });

  it('should return true if given 1', () => {
    const result = isNumber(1);
    const expected = true;

    expect(result).toBe(expected);
  });

  it('should return true if given -1', () => {
    const result = isNumber(-1);
    const expected = true;

    expect(result).toBe(expected);
  });

  it('should return false if given "0"', () => {
    const result = isNumber('0');
    const expected = false;

    expect(result).toBe(expected);
  });

  it('should return false if given "1"', () => {
    const result = isNumber('1');
    const expected = false;

    expect(result).toBe(expected);
  });

  it('should return false if given true', () => {
    const result = isNumber(true);
    const expected = false;

    expect(result).toBe(expected);
  });

  it('should return false if given NaN', () => {
    const result = isNumber(NaN);
    const expected = false;

    expect(result).toBe(expected);
  });
});
