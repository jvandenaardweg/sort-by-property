/**
 * Checks if the typeof `value` is `BigInt`.
 */
export function isBigInt(value: unknown): value is bigint {
  return typeof value === 'bigint';
}
