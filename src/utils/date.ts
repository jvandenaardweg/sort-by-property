/**
 * Checks if the typeof `value` is `Date`.
 */
export function isDate(value: unknown): value is Date {
  return value instanceof Date && typeof value.getMonth === "function";
}
