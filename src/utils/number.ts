/**
 * Checks if the typeof `value` is `number`.
 */
export function isNumber(value: unknown): value is number {
  return typeof value === "number";
}
