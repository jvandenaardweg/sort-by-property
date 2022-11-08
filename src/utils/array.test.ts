import { isArray } from './array';

describe('isArray', () => {
  it('should return true if given an array of strings', () => {
    const result = isArray(['a', 'b', 'c']);
    const expected = true;

    expect(result).toBe(expected);
  });

  it('should return true if given an array of numbers', () => {
    const result = isArray([1, 2, 3]);
    const expected = true;

    expect(result).toBe(expected);
  });

  it('should return false if given a string', () => {
    const result = isArray('a string');
    const expected = false;

    expect(result).toBe(expected);
  });

  it('should return false if given 0', () => {
    const result = isArray(0);
    const expected = false;

    expect(result).toBe(expected);
  });

  it('should return false if given 1', () => {
    const result = isArray(1);
    const expected = false;

    expect(result).toBe(expected);
  });

  it('should return false if given true', () => {
    const result = isArray(true);
    const expected = false;

    expect(result).toBe(expected);
  });

  it('should return false if given NaN', () => {
    const result = isArray(NaN);
    const expected = false;

    expect(result).toBe(expected);
  });
});
