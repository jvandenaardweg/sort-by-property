import { isDate } from '@/utils/date';
import { isString } from '@/utils/string';
import { isNumber } from '@/utils/number';
import { isArray } from '@/utils/array';

export type SortByDirection = 'asc' | 'desc';

/**
 * Sorts an array with `string`, `string[]`, `number`, `number[]`, `Date`, `Date[]` values in the given `direction`.
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
    : T[K] extends number | number[] | string | string[] | Date | Date[]
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
  return (a: T, b: T): number => {
    // Create an array of properties to traverse.
    // Example `author.name` => ['author', 'name']
    // And use reduce with the `a` and `b` objects to get the value of the property.
    const aProperty = propertyPath
      .split('.')
      .reduce((unknownObject, propertyName) => unknownObject[propertyName], a);

    const bProperty = propertyPath
      .split('.')
      .reduce((unknownObject, propertyName) => unknownObject[propertyName], b);

    return sortBy(direction)(aProperty, bProperty);
  };
}
