import { sortBy, sortByProperty } from './index';

describe('arrays', () => {
  describe('sortBy', () => {
    it('should sort an string array ascending', () => {
      const unsortedArray = ['c', 'b', 'a'];
      const result = unsortedArray.sort(sortBy('asc'));
      const expected = ['a', 'b', 'c'];

      expect(result).toStrictEqual(expected);
    });

    it('should sort an string array descending', () => {
      const unsortedArray = ['a', 'b', 'c'];
      const result = unsortedArray.sort(sortBy('desc'));
      const expected = ['c', 'b', 'a'];

      expect(result).toStrictEqual(expected);
    });

    it('should sort an array of numbers as strings in ascending order', () => {
      const unsortedArray = ['1', '2.2', '22', '3'];
      const result = unsortedArray.sort(sortBy('asc'));
      const expected = ['1', '2.2', '3', '22'];

      expect(result).toStrictEqual(expected);
    });

    it('should sort an array of numbers as strings in descending order', () => {
      const unsortedArray = ['1', '2.2', '22', '3'];
      const result = unsortedArray.sort(sortBy('desc'));
      const expected = ['22', '3', '2.2', '1'];

      expect(result).toStrictEqual(expected);
    });

    it('should sort an number array ascending', () => {
      const unsortedArray = [3, 2, 1];
      const result = unsortedArray.sort(sortBy('asc'));
      const expected = [1, 2, 3];

      expect(result).toStrictEqual(expected);
    });

    it('should sort an number array descending', () => {
      const unsortedArray = [1, 2, 3];
      const result = unsortedArray.sort(sortBy('desc'));
      const expected = [3, 2, 1];

      expect(result).toStrictEqual(expected);
    });

    it('should sort undefined values in an number array ascending', () => {
      const unsortedArray = [3, undefined, 1];
      const result = unsortedArray.sort(sortBy('asc'));
      const expected = [1, 3, undefined];

      expect(result).toStrictEqual(expected);
    });

    it('should sort undefined values in an number array descending', () => {
      const unsortedArray = [1, undefined, 3];
      const result = unsortedArray.sort(sortBy('desc'));
      const expected = [3, 1, undefined];

      expect(result).toStrictEqual(expected);
    });

    it('should sort null values in an number array ascending', () => {
      const unsortedArray = [3, null, 1];
      const result = unsortedArray.sort(sortBy('asc'));
      const expected = [1, 3, null];

      expect(result).toStrictEqual(expected);
    });

    it('should sort null values in an number array descending', () => {
      const unsortedArray = [1, null, 3];
      const result = unsortedArray.sort(sortBy('desc'));
      const expected = [3, 1, null];

      expect(result).toStrictEqual(expected);
    });

    it('should sort undefined values in an number array ascending', () => {
      const unsortedArray = [3, undefined, 1];
      const result = unsortedArray.sort(sortBy('asc'));
      const expected = [1, 3, undefined];

      expect(result).toStrictEqual(expected);
    });

    it('should sort undefined values in an number array descending', () => {
      const unsortedArray = [1, undefined, 3];
      const result = unsortedArray.sort(sortBy('desc'));
      const expected = [3, 1, undefined];

      expect(result).toStrictEqual(expected);
    });

    it('should sort an BigInt array ascending', () => {
      const unsortedArray = [10n, 5n, 1n];
      const result = unsortedArray.sort(sortBy('asc'));
      const expected = [1n, 5n, 10n];

      expect(result).toStrictEqual(expected);
    });

    it('should sort an BigInt array descending', () => {
      const unsortedArray = [1n, 10n, 5n];
      const result = unsortedArray.sort(sortBy('desc'));
      const expected = [10n, 5n, 1n];

      expect(result).toStrictEqual(expected);
    });

    it('should sort an Symbol array ascending', () => {
      const a = Symbol('a');
      const b = Symbol('b');
      const c = Symbol('c');

      const unsortedArray = [c, b, a];
      const result = unsortedArray.sort(sortBy('asc'));
      const expected = [a, b, c];

      expect(result).toStrictEqual(expected);
    });

    it('should sort an Symbol array descending', () => {
      const a = Symbol('a');
      const b = Symbol('b');
      const c = Symbol('c');

      const unsortedArray = [a, b, c];
      const result = unsortedArray.sort(sortBy('desc'));
      const expected = [c, b, a];

      expect(result).toStrictEqual(expected);
    });

    it('should error when all array items are not from the same type while sorting descending', () => {
      const unsortedArray = [1, '2', 3];
      const resultFn = () => unsortedArray.sort(sortBy('desc'));

      expect(resultFn).toThrowError();
    });

    it('should error when all array items are not from the same type while sorting ascending', () => {
      const unsortedArray = [1, '2', 3];
      const resultFn = () => unsortedArray.sort(sortBy('asc'));

      expect(resultFn).toThrowError();
    });
  });
  describe('sortByProperty', () => {
    it('should throw an error when property types are not the same when sorting in ascending direction', () => {
      const unsortedArray = [{ post: { id: 3 } }, { post: { id: 2 } }, { post: { id: 'A' } }];
      const resultFn = () => unsortedArray.sort(sortByProperty('post.id', 'asc'));

      expect(resultFn).toThrowError();
    });

    it('should throw an error when property types are not the same when sorting in descending direction', () => {
      const unsortedArray = [{ post: { id: 3 } }, { post: { id: 2 } }, { post: { id: 'A' } }];
      const resultFn = () => unsortedArray.sort(sortByProperty('post.id', 'desc'));

      expect(resultFn).toThrowError();
    });

    it('should sort an array ascending by nested string property', () => {
      const unsortedArray = [
        { post: { title: 'C' } },
        { post: { title: 'B' } },
        { post: { title: 'A' } },
      ];
      const result = unsortedArray.sort(sortByProperty('post.title', 'asc'));
      const expected = [
        { post: { title: 'A' } },
        { post: { title: 'B' } },
        { post: { title: 'C' } },
      ];

      expect(result).toStrictEqual(expected);
    });

    it('should sort an array descending by nested string property', () => {
      const unsortedArray = [
        { post: { title: 'A' } },
        { post: { title: 'B' } },
        { post: { title: 'C' } },
      ];
      const result = unsortedArray.sort(sortByProperty('post.title', 'desc'));
      const expected = [
        { post: { title: 'C' } },
        { post: { title: 'B' } },
        { post: { title: 'A' } },
      ];

      expect(result).toStrictEqual(expected);
    });

    it('should sort an array descending by nested string property', () => {
      const unsortedArray = [
        { post: { titles: ['C', 'B', 'A'] } },
        { post: { titles: ['A', 'C', 'B'] } },
        { post: { titles: ['B', 'C', 'A'] } },
      ];
      const result = unsortedArray.sort(sortByProperty('post.titles', 'desc'));
      const expected = [
        { post: { titles: ['C', 'B', 'A'] } },
        { post: { titles: ['C', 'B', 'A'] } },
        { post: { titles: ['C', 'B', 'A'] } },
      ];

      expect(result).toStrictEqual(expected);
    });

    it('should sort an array ascending by nested string array property', () => {
      const unsortedArray = [
        { post: { titles: ['C', 'B', 'A'] } },
        { post: { titles: ['A', 'C', 'B'] } },
        { post: { titles: ['B', 'C', 'A'] } },
      ];
      const result = unsortedArray.sort(sortByProperty('post.titles', 'asc'));
      const expected = [
        { post: { titles: ['A', 'B', 'C'] } },
        { post: { titles: ['A', 'B', 'C'] } },
        { post: { titles: ['A', 'B', 'C'] } },
      ];

      expect(result).toStrictEqual(expected);
    });

    it('should sort an array descending by nested string array property', () => {
      const unsortedArray = [
        { post: { ids: [3, 2, 1] } },
        { post: { ids: [1, 3, 2] } },
        { post: { ids: [2, 3, 1] } },
      ];
      const result = unsortedArray.sort(sortByProperty('post.ids', 'desc'));
      const expected = [
        { post: { ids: [3, 2, 1] } },
        { post: { ids: [3, 2, 1] } },
        { post: { ids: [3, 2, 1] } },
      ];

      expect(result).toStrictEqual(expected);
    });

    it('should sort an array ascending by nested numbers array property', () => {
      const unsortedArray = [
        { post: { ids: [3, 2, 1] } },
        { post: { ids: [1, 3, 2] } },
        { post: { ids: [2, 3, 1] } },
      ];
      const result = unsortedArray.sort(sortByProperty('post.ids', 'asc'));
      const expected = [
        { post: { ids: [1, 2, 3] } },
        { post: { ids: [1, 2, 3] } },
        { post: { ids: [1, 2, 3] } },
      ];

      expect(result).toStrictEqual(expected);
    });

    it('should sort an array descending by nested date array property', () => {
      const a = new Date('2021-12-31');
      const b = new Date('2022-12-31');
      const c = new Date('2023-12-31');

      const unsortedArray = [
        {
          post: {
            dates: [c, b, a],
          },
        },
        {
          post: {
            dates: [a, c, b],
          },
        },
        {
          post: {
            dates: [b, c, a],
          },
        },
      ];
      const result = unsortedArray.sort(sortByProperty('post.dates', 'desc'));
      const expected = [
        {
          post: {
            dates: [c, b, a],
          },
        },
        {
          post: {
            dates: [c, b, a],
          },
        },
        {
          post: {
            dates: [c, b, a],
          },
        },
      ];

      expect(result).toStrictEqual(expected);
    });

    it('should sort an array ascending by nested date array property', () => {
      const a = new Date('2021-12-31');
      const b = new Date('2022-12-31');
      const c = new Date('2023-12-31');

      const unsortedArray = [
        {
          post: {
            dates: [c, b, a],
          },
        },
        {
          post: {
            dates: [a, c, b],
          },
        },
        {
          post: {
            dates: [b, c, a],
          },
        },
      ];
      const result = unsortedArray.sort(sortByProperty('post.dates', 'asc'));
      const expected = [
        {
          post: {
            dates: [a, b, c],
          },
        },
        {
          post: {
            dates: [a, b, c],
          },
        },
        {
          post: {
            dates: [a, b, c],
          },
        },
      ];

      expect(result).toStrictEqual(expected);
    });

    it('should sort an array ascending by nested number property', () => {
      const a = { post: { id: 1 } };
      const b = { post: { id: 2 } };
      const c = { post: { id: 3 } };

      const unsortedArray = [c, b, a];
      const result = unsortedArray.sort(sortByProperty('post.id', 'asc'));
      const expected = [a, b, c];

      expect(result).toStrictEqual(expected);
    });

    it('should sort an array descending by nested number property', () => {
      const a = { post: { id: 1 } };
      const b = { post: { id: 2 } };
      const c = { post: { id: 3 } };

      const unsortedArray = [a, b, c];
      const result = unsortedArray.sort(sortByProperty('post.id', 'desc'));
      const expected = [c, b, a];

      expect(result).toStrictEqual(expected);
    });

    it('should sort an array ascending by the id property', () => {
      const a = { id: 1 };
      const b = { id: 2 };
      const c = { id: 3 };

      const unsortedArray = [c, b, a];
      const result = unsortedArray.sort(sortByProperty('id', 'asc'));
      const expected = [a, b, c];

      expect(result).toStrictEqual(expected);
    });

    it('should sort an array descending by the id property', () => {
      const a = { id: 1 };
      const b = { id: 2 };
      const c = { id: 3 };

      const unsortedArray = [a, b, c];
      const result = unsortedArray.sort(sortByProperty('id', 'desc'));
      const expected = [c, b, a];

      expect(result).toStrictEqual(expected);
    });

    it('should sort an array ascending by the firstName property', () => {
      const a = { firstName: 'Anton' };
      const b = { firstName: 'Bert' };
      const c = { firstName: 'Jan' };

      const unsortedArray = [a, c, b];
      const result = unsortedArray.sort(sortByProperty('firstName', 'asc'));
      const expected = [a, b, c];

      expect(result).toStrictEqual(expected);
    });

    it('should sort an array descending by the firstName property', () => {
      const a = { firstName: 'Anton' };
      const b = { firstName: 'Bert' };
      const c = { firstName: 'Jan' };

      const unsortedArray = [a, b, c];
      const result = unsortedArray.sort(sortByProperty('firstName', 'desc'));
      const expected = [c, b, a];

      expect(result).toStrictEqual(expected);
    });

    it('should sort an array ascending by the date property', () => {
      const a = { date: new Date('2019-12-31') };
      const b = { date: new Date('2020-12-31') };
      const c = { date: new Date('2021-12-31') };

      const unsortedArray = [c, b, a];
      const result = unsortedArray.sort(sortByProperty('date', 'asc'));
      const expected = [a, b, c];

      expect(result).toStrictEqual(expected);
    });

    it('should sort an array descending by the date property', () => {
      const a = { date: new Date('2019-12-31') };
      const b = { date: new Date('2020-12-31') };
      const c = { date: new Date('2021-12-31') };

      const unsortedArray = [a, b, c];
      const result = unsortedArray.sort(sortByProperty('date', 'desc'));
      const expected = [c, b, a];

      expect(result).toStrictEqual(expected);
    });

    it('should sort an array ascending by the number property', () => {
      const a = { number: '1' };
      const b = { number: '2.2' };
      const c = { number: '22' };

      const unsortedArray = [a, c, b];
      const result = unsortedArray.sort(sortByProperty('number', 'asc'));
      const expected = [a, b, c];

      expect(result).toStrictEqual(expected);
    });

    it('should sort an array descending by the number property', () => {
      const a = { number: '1' };
      const b = { number: '2.2' };
      const c = { number: '22' };

      const unsortedArray = [a, c, b];
      const result = unsortedArray.sort(sortByProperty('number', 'desc'));
      const expected = [c, b, a];

      expect(result).toStrictEqual(expected);
    });

    it('should sort an array ascending by the id property with null values', () => {
      const a = { id: 1 };
      const b = { id: null };
      const c = { id: 3 };

      const unsortedArray = [c, b, a];
      const result = unsortedArray.sort(sortByProperty('id', 'asc'));
      const expected = [a, c, b];

      expect(result).toStrictEqual(expected);
    });

    it('should sort an array descending by the id property with null values', () => {
      const a = { id: 1 };
      const b = { id: null };
      const c = { id: 3 };

      const unsortedArray = [a, b, c];
      const result = unsortedArray.sort(sortByProperty('id', 'desc'));
      const expected = [c, a, b];

      expect(result).toStrictEqual(expected);
    });

    it('should sort an array ascending by the id property with null values', () => {
      const a = { id: 1 };
      const b = { id: undefined };
      const c = { id: 3 };

      const unsortedArray = [c, b, a];
      const result = unsortedArray.sort(sortByProperty('id', 'asc'));
      const expected = [a, c, b];

      expect(result).toStrictEqual(expected);
    });

    it('should sort an array descending by the id property with undefined values', () => {
      const a = { id: 1 };
      const b = { id: undefined };
      const c = { id: 3 };

      const unsortedArray = [a, c, b];
      const result = unsortedArray.sort(sortByProperty('id', 'desc'));
      const expected = [c, a, b];

      expect(result).toStrictEqual(expected);
    });

    it('should sort an array with a BigInt values ascending by the number property', () => {
      const a = { number: 1n };
      const b = { number: 2n };
      const c = { number: 3n };

      const unsortedArray = [b, c, a];
      const result = unsortedArray.sort(sortByProperty('number', 'asc'));
      const expected = [a, b, c];

      expect(result).toStrictEqual(expected);
    });

    it('should sort an array with a BigInt values descending by the number property', () => {
      const a = { number: 1n };
      const b = { number: 2n };
      const c = { number: 3n };

      const unsortedArray = [b, c, a];
      const result = unsortedArray.sort(sortByProperty('number', 'desc'));
      const expected = [c, b, a];

      expect(result).toStrictEqual(expected);
    });

    it('should sort an array with a Symbol values ascending by the number property', () => {
      const a = { symbol: Symbol('a') };
      const b = { symbol: Symbol('b') };
      const c = { symbol: Symbol('c') };

      const unsortedArray = [b, c, a];
      const result = unsortedArray.sort(sortByProperty('symbol', 'asc'));
      const expected = [a, b, c];

      expect(result).toStrictEqual(expected);
    });

    it('should sort an array with a Symbol values descending by the number property', () => {
      const a = { symbol: Symbol('a') };
      const b = { symbol: Symbol('b') };
      const c = { symbol: Symbol('c') };

      const unsortedArray = [a, b, c];
      const result = unsortedArray.sort(sortByProperty('symbol', 'desc'));
      const expected = [c, b, a];

      expect(result).toStrictEqual(expected);
    });

    it('should sort a really deeply nested object in ascending order', () => {
      const a = {
        user: {
          name: 'Anton',
          location: {
            country: {
              name: 'Argentina',
            },
          },
        },
      };

      const b = {
        user: {
          name: 'Boris',
          location: {
            country: {
              name: 'Belgium',
            },
          },
        },
      };

      const c = {
        user: {
          name: 'Chris',
          location: {
            country: {
              name: 'Canada',
            },
          },
        },
      };

      const unsortedArray = [a, b, c];
      const result = unsortedArray.sort(sortByProperty('user.location.country.name', 'asc'));
      const expected = [a, b, c];

      expect(result).toStrictEqual(expected);
    });

    it('should sort a really deeply nested object in descending order', () => {
      const a = {
        user: {
          name: 'Anton',
          location: {
            country: {
              name: 'Argentina',
            },
          },
        },
      };

      const b = {
        user: {
          name: 'Boris',
          location: {
            country: {
              name: 'Belgium',
            },
          },
        },
      };

      const c = {
        user: {
          name: 'Chris',
          location: {
            country: {
              name: 'Canada',
            },
          },
        },
      };

      const unsortedArray = [a, b, c];
      const result = unsortedArray.sort(sortByProperty('user.location.country.name', 'desc'));
      const expected = [c, b, a];

      expect(result).toStrictEqual(expected);
    });
  });
});
