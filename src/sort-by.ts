import { isDate } from '@/utils/date';
import { isString } from '@/utils/string';
import { isNumber } from '@/utils/number';
import { isArray } from '@/utils/array';
import { isNil } from '@/utils/null';
import { isBigInt } from '@/utils/big-int';

export type SortByDirection = 'asc' | 'desc';

/**
 * Sorts an array with `string`, `string[]`, `number`, `number[]`, `Date`, `Date[]`, `bigint` and `bigint[]` values in the given `direction`.
 */
export function sortBy<T>(direction: SortByDirection) {
  return (a: T, b: T): number => {
    if (direction === 'asc') {
      // number asc (a -> b)
      if (isNumber(a) && isNumber(b)) {
        return a - b;
      }

      // string asc (a -> b)
      if (isString(a) && isString(b)) {
        // if string is disguised as a number, cast back to an actual number to sort
        if (!isNaN(a as number) && !isNaN(b as number)) {
          return parseFloat(a) - parseFloat(b);
        }

        return a.localeCompare(b);
      }

      // date asc (a -> b)
      if (isDate(a) && isDate(b)) {
        return +a - +b;
      }

      // array asc (a -> b)
      if (isArray(a) && isArray(b)) {
        return a
          .sort(sortBy(direction))
          .toString()
          .localeCompare(b.sort(sortBy(direction)).toString());
      }

      // bigint asc (a -> b)
      if (isBigInt(a) && isBigInt(b)) {
        if (a < b) {
          return -1;
        }
        if (a > b) {
          return 1;
        }

        return 0;
      }
    }

    // number desc (b -> a)
    if (isNumber(a) && isNumber(b)) {
      return b - a;
    }

    // string desc (b -> a)
    if (isString(a) && isString(b)) {
      // if string is disguised as a number, cast back to an actual number to sort
      if (!isNaN(a as number) && !isNaN(b as number)) {
        return parseFloat(b) - parseFloat(a);
      }
      return b.localeCompare(a);
    }

    // date desc (b -> a)
    if (isDate(a) && isDate(b)) {
      return +b - +a;
    }

    // array desc (b -> a)
    if (isArray(a) && isArray(b)) {
      return b
        .sort(sortBy(direction))
        .toString()
        .localeCompare(a.sort(sortBy(direction)).toString());
    }

    // bigint desc (b -> a)
    if (isBigInt(a) && isBigInt(b)) {
      if (a < b) {
        return 1;
      }
      if (a > b) {
        return -1;
      }

      return 0;
    }

    // if a is null or undefined and b is not, a is greater than b
    // moving the item to the end of the array
    if (isNil(a) && b) {
      return 1;
    }

    // if b is null or undefined and a is not, a is less than b
    // moving the item to the end of the array
    if (a && isNil(b)) {
      return -1;
    }

    throw new Error(
      `Can't sort, typeof a (${typeof a}: ${JSON.stringify(
        a,
      )}) and typeof b (${typeof b}: ${JSON.stringify(b)}) are not handled by any sorting logic.`,
    );
  };
}

/**
 * Some Typescript magic that allows us to get type strictness for the `sortByProperty` function.
 *
 * Using this type gives auto-completion of object properties on the `propertyPath` parameter on `sortByProperty`.
 */
export type PathOfString<T, P extends string = ''> = {
  [K in keyof T & string]: T[K] extends Record<string, unknown>
    ? PathOfString<T[K], `${P}${K}.`> extends infer S
      ? `${S & string}`
      : never
    : T[K] extends
        | number
        | number[]
        | string
        | string[]
        | Date
        | Date[]
        | bigint
        | bigint[]
        | null
        | undefined
    ? `${P}${K}`
    : T[K] extends unknown[]
    ? PathOfString<T[K][number], `${P}${K}.`> extends infer S
      ? `${S & string}`
      : never
    : PathOfString<T[K], `${P}${K}.`> extends infer S
    ? `${S & string}`
    : never;
}[keyof T & string];

/**
 * Sorts an array by the given property `path` in the given `direction`.
 *
 */
export function sortByProperty<T extends Record<string, any>>(
  propertyPath: PathOfString<T>,
  direction: SortByDirection,
) {
  const splittedPath = propertyPath.split('.');

  return (a: T, b: T): number => {
    // Create an array of properties to traverse.
    // Example `author.name` => ['author', 'name']
    // And use reduce with the `a` and `b` objects to get the value of the property.
    const aProperty = splittedPath.reduce(
      (unknownObject, propertyName) => unknownObject[propertyName],
      a,
    );

    const bProperty = splittedPath.reduce(
      (unknownObject, propertyName) => unknownObject[propertyName],
      b,
    );

    return sortBy(direction)(aProperty, bProperty);
  };
}
