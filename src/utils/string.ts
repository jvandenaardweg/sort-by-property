/**
 * Checks if the typeof `value` is `string`.
 */
export function isString(value: unknown): value is string {
  return typeof value === 'string';
}

/**
 * Returns the keys of an object path as an array of strings.
 */
export function getObjectKeysFromPathString(path: string): string[] {
  return path.split('.');
}
