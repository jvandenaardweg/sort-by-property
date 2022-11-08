/**
 * Checks if the typeof `value` is `string`.
 */
export function isString(value: unknown): value is string {
  return typeof value === "string";
}
