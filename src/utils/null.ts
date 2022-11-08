/**
 * Checks if `value` is `null` or `undefined`.
 */
export function isNil<T>(value?: T | null): value is null | undefined {
  return value === null || value === undefined;
}
