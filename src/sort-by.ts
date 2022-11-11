import { isDate } from '@/utils/date';
import { isString } from '@/utils/string';
import { isNumber } from '@/utils/number';
import { isArray } from '@/utils/array';
import { isNil } from '@/utils/null';
import { isBigInt } from '@/utils/big-int';
import { isSymbol } from './utils/symbol';

type SortFunctionReturn<T> = (a: T, b: T) => number;

export type SortByDirection = 'asc' | 'desc';

export type SupportedTypes =
  | number
  | number[]
  | string
  | string[]
  | Date
  | Date[]
  | bigint
  | bigint[]
  | symbol
  | symbol[]
  | null
  | undefined;

/**
 * Sorts an array with values from `SupportedTypes` in the given `direction`.
 */
export function sortBy<T>(direction: SortByDirection): SortFunctionReturn<T> {
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

      // symbol asc (a -> b)
      if (isSymbol(a) && isSymbol(b)) {
        return a.toString().localeCompare(b.toString());
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

    // symbol desc (b -> a)
    if (isSymbol(a) && isSymbol(b)) {
      return b.toString().localeCompare(a.toString());
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
export type PropertyPath<T, P extends string = ''> = {
  [K in keyof T & string]: T[K] extends Record<string, unknown>
    ? PropertyPath<T[K], `${P}${K}.`> extends infer S
      ? `${S & string}`
      : never
    : T[K] extends SupportedTypes
    ? `${P}${K}`
    : T[K] extends unknown[]
    ? PropertyPath<T[K][number], `${P}${K}.`> extends infer S
      ? `${S & string}`
      : never
    : PropertyPath<T[K], `${P}${K}.`> extends infer S
    ? `${S & string}`
    : never;
}[keyof T & string];

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const getPropertyValueFromNames = (propertyNames: string[], unknownObject: any) =>
  propertyNames.reduce((unknownObject, propertyName) => unknownObject[propertyName], unknownObject);

/**
 * Sorts an array by the given property `propertyPath` in the given `direction`.
 *
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function sortByProperty<T extends Record<string, any>>(
  propertyPath: PropertyPath<T>,
  direction: SortByDirection,
): SortFunctionReturn<T> {
  // Create an array of properties to traverse.
  // Example `author.name` => ['author', 'name']
  const propertyNames = propertyPath.split('.');

  return (a: T, b: T): number => {
    // Set the first a and b value so we can skip the reduce part below if there's only 1 property name
    // Doing it this way has a small performance benefit on large arrays
    let aPropertyValue = a[propertyNames[0]];
    let bPropertyValue = b[propertyNames[0]];

    // There are multiple properties.
    // Using reduce with the `a` and `b` objects to get the value of the property.
    if (propertyNames.length > 1) {
      aPropertyValue = getPropertyValueFromNames(propertyNames, a);

      bPropertyValue = getPropertyValueFromNames(propertyNames, b);
    }

    return sortBy(direction)(aPropertyValue, bPropertyValue);
  };
}
