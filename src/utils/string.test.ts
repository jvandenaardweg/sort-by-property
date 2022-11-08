import { isString } from './string';

describe('isString', () => {
  it('should return true if given "hello world"', () => {
    const result = isString('hello world');
    const expected = true;

    expect(result).toBe(expected);
  });

  it('should return true if given ""', () => {
    const result = isString('');
    const expected = true;

    expect(result).toBe(expected);
  });

  it('should return true if given "1"', () => {
    const result = isString('1');
    const expected = true;

    expect(result).toBe(expected);
  });

  it('should return false if given 0', () => {
    const result = isString(0);
    const expected = false;

    expect(result).toBe(expected);
  });

  it('should return false if given 1', () => {
    const result = isString(1);
    const expected = false;

    expect(result).toBe(expected);
  });

  it('should return false if given true', () => {
    const result = isString(true);
    const expected = false;

    expect(result).toBe(expected);
  });

  it('should return false if given NaN', () => {
    const result = isString(NaN);
    const expected = false;

    expect(result).toBe(expected);
  });
});
