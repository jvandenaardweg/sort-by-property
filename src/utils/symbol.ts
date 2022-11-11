/**
 * Checks if the typeof `value` is `symbol`.
 */
export function isSymbol(value: unknown): value is symbol {
  return typeof value === 'symbol';
}
