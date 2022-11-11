import { getPropertyValueFromNames } from './object';
import { getObjectKeysFromPathString } from './string';

describe('getPropertyValueFromNames', () => {
  it('should return the value of the property when given a object path as an array', () => {
    const object = {
      a: {
        b: {
          c: 'value',
        },
      },
    };

    const propertyNames = getObjectKeysFromPathString('a.b.c');

    const result = getPropertyValueFromNames(propertyNames, object);

    const expected = 'value';

    expect(result).toBe(expected);
  });
});
