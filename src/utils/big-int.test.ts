import { isBigInt } from './big-int';

describe('isBigInt', () => {
  it('should return true if given a BigInt of 10n', () => {
    const result = isBigInt(10n);
    const expected = true;

    expect(result).toBe(expected);
  });

  it('should return true if given a BigInt of 1n', () => {
    const result = isBigInt(1n);
    const expected = true;

    expect(result).toBe(expected);
  });

  it('should return false if given "2021-12-31"', () => {
    const result = isBigInt('2021-12-31');
    const expected = false;

    expect(result).toBe(expected);
  });

  it('should return false if given 0', () => {
    const result = isBigInt(0);
    const expected = false;

    expect(result).toBe(expected);
  });

  it('should return false if given 1', () => {
    const result = isBigInt(1);
    const expected = false;

    expect(result).toBe(expected);
  });

  it('should return false if given true', () => {
    const result = isBigInt(true);
    const expected = false;

    expect(result).toBe(expected);
  });

  it('should return false if given NaN', () => {
    const result = isBigInt(NaN);
    const expected = false;

    expect(result).toBe(expected);
  });
});
