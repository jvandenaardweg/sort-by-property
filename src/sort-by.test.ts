import { sortBy, sortByProperty } from './sort-by';

describe('arrays', () => {
  describe('sortBy', () => {
    it('should sort an string array ascending', () => {
      const array = ['c', 'b', 'a'];
      const result = [...array].sort(sortBy('asc'));
      const expected = ['a', 'b', 'c'];

      expect(result).toEqual(expected);
    });

    it('should sort an string array descending', () => {
      const array = ['a', 'b', 'c'];
      const result = [...array].sort(sortBy('desc'));
      const expected = ['c', 'b', 'a'];

      expect(result).toEqual(expected);
    });

    it('should sort an array of numbers as strings in ascending order', () => {
      const array = ['1', '2.2', '22', '3'];
      const result = [...array].sort(sortBy('asc'));
      const expected = ['1', '2.2', '3', '22'];

      expect(result).toEqual(expected);
    });

    it('should sort an array of numbers as strings in descending order', () => {
      const array = ['1', '2.2', '22', '3'];
      const result = [...array].sort(sortBy('desc'));
      const expected = ['22', '3', '2.2', '1'];

      expect(result).toEqual(expected);
    });

    it('should sort an number array ascending', () => {
      const array = [3, 2, 1];
      const result = [...array].sort(sortBy('asc'));
      const expected = [1, 2, 3];

      expect(result).toEqual(expected);
    });

    it('should sort an number array descending', () => {
      const array = [1, 2, 3];
      const result = [...array].sort(sortBy('desc'));
      const expected = [3, 2, 1];

      expect(result).toEqual(expected);
    });

    it('should sort undefined values in an number array ascending', () => {
      const array = [3, undefined, 1];
      const result = [...array].sort(sortBy('asc'));
      const expected = [1, 3, undefined];

      expect(result).toEqual(expected);
    });

    it('should sort undefined values in an number array descending', () => {
      const array = [1, undefined, 3];
      const result = [...array].sort(sortBy('desc'));
      const expected = [3, 1, undefined];

      expect(result).toEqual(expected);
    });

    it('should sort null values in an number array ascending', () => {
      const array = [3, null, 1];
      const result = [...array].sort(sortBy('asc'));
      const expected = [1, 3, null];

      expect(result).toEqual(expected);
    });

    it('should sort null values in an number array descending', () => {
      const array = [1, null, 3];
      const result = [...array].sort(sortBy('desc'));
      const expected = [3, 1, null];

      expect(result).toEqual(expected);
    });

    it('should sort undefined values in an number array ascending', () => {
      const array = [3, undefined, 1];
      const result = [...array].sort(sortBy('asc'));
      const expected = [1, 3, undefined];

      expect(result).toEqual(expected);
    });

    it('should sort undefined values in an number array descending', () => {
      const array = [1, undefined, 3];
      const result = [...array].sort(sortBy('desc'));
      const expected = [3, 1, undefined];

      expect(result).toEqual(expected);
    });

    it('should sort an BigInt array ascending', () => {
      const array = [10n, 5n, 1n];
      const result = [...array].sort(sortBy('asc'));
      const expected = [1n, 5n, 10n];

      expect(result).toEqual(expected);
    });

    it('should sort an BigInt array descending', () => {
      const array = [1n, 10n, 5n];
      const result = [...array].sort(sortBy('desc'));
      const expected = [10n, 5n, 1n];

      expect(result).toEqual(expected);
    });

    it('should error when all array items are not from the same type while sorting descending', () => {
      const array = [1, '2', 3];
      const resultFn = () => [...array].sort(sortBy('desc'));

      expect(resultFn).toThrowError();
    });

    it('should error when all array items are not from the same type while sorting ascending', () => {
      const array = [1, '2', 3];
      const resultFn = () => [...array].sort(sortBy('asc'));

      expect(resultFn).toThrowError();
    });
  });
  describe('sortByProperty', () => {
    it('should throw an error when property types are not the same when sorting in ascending direction', () => {
      const array = [{ post: { id: 3 } }, { post: { id: 2 } }, { post: { id: 'A' } }];
      const resultFn = () => [...array].sort(sortByProperty('post.id', 'asc'));

      expect(resultFn).toThrowError();
    });

    it('should throw an error when property types are not the same when sorting in descending direction', () => {
      const array = [{ post: { id: 3 } }, { post: { id: 2 } }, { post: { id: 'A' } }];
      const resultFn = () => [...array].sort(sortByProperty('post.id', 'desc'));

      expect(resultFn).toThrowError();
    });

    it('should sort an array ascending by nested string property', () => {
      const array = [{ post: { title: 'C' } }, { post: { title: 'B' } }, { post: { title: 'A' } }];
      const result = [...array].sort(sortByProperty('post.title', 'asc'));
      const expected = [
        { post: { title: 'A' } },
        { post: { title: 'B' } },
        { post: { title: 'C' } },
      ];

      expect(result).toEqual(expected);
    });

    it('should sort an array descending by nested string property', () => {
      const array = [{ post: { title: 'A' } }, { post: { title: 'B' } }, { post: { title: 'C' } }];
      const result = [...array].sort(sortByProperty('post.title', 'desc'));
      const expected = [
        { post: { title: 'C' } },
        { post: { title: 'B' } },
        { post: { title: 'A' } },
      ];

      expect(result).toEqual(expected);
    });

    it('should sort an array descending by nested string property', () => {
      const array = [
        { post: { titles: ['C', 'B', 'A'] } },
        { post: { titles: ['A', 'C', 'B'] } },
        { post: { titles: ['B', 'C', 'A'] } },
      ];
      const result = [...array].sort(sortByProperty('post.titles', 'desc'));
      const expected = [
        { post: { titles: ['C', 'B', 'A'] } },
        { post: { titles: ['C', 'B', 'A'] } },
        { post: { titles: ['C', 'B', 'A'] } },
      ];

      expect(result).toEqual(expected);
    });

    it('should sort an array ascending by nested string array property', () => {
      const array = [
        { post: { titles: ['C', 'B', 'A'] } },
        { post: { titles: ['A', 'C', 'B'] } },
        { post: { titles: ['B', 'C', 'A'] } },
      ];
      const result = [...array].sort(sortByProperty('post.titles', 'asc'));
      const expected = [
        { post: { titles: ['A', 'B', 'C'] } },
        { post: { titles: ['A', 'B', 'C'] } },
        { post: { titles: ['A', 'B', 'C'] } },
      ];

      expect(result).toEqual(expected);
    });

    it('should sort an array descending by nested string array property', () => {
      const array = [
        { post: { ids: [3, 2, 1] } },
        { post: { ids: [1, 3, 2] } },
        { post: { ids: [2, 3, 1] } },
      ];
      const result = [...array].sort(sortByProperty('post.ids', 'desc'));
      const expected = [
        { post: { ids: [3, 2, 1] } },
        { post: { ids: [3, 2, 1] } },
        { post: { ids: [3, 2, 1] } },
      ];

      expect(result).toEqual(expected);
    });

    it('should sort an array ascending by nested numbers array property', () => {
      const array = [
        { post: { ids: [3, 2, 1] } },
        { post: { ids: [1, 3, 2] } },
        { post: { ids: [2, 3, 1] } },
      ];
      const result = [...array].sort(sortByProperty('post.ids', 'asc'));
      const expected = [
        { post: { ids: [1, 2, 3] } },
        { post: { ids: [1, 2, 3] } },
        { post: { ids: [1, 2, 3] } },
      ];

      expect(result).toEqual(expected);
    });

    it('should sort an array descending by nested date array property', () => {
      const array = [
        {
          post: {
            dates: [new Date('2023-12-31'), new Date('2022-12-31'), new Date('2021-12-31')],
          },
        },
        {
          post: {
            dates: [new Date('2021-12-31'), new Date('2023-12-31'), new Date('2022-12-31')],
          },
        },
        {
          post: {
            dates: [new Date('2022-12-31'), new Date('2023-12-31'), new Date('2021-12-31')],
          },
        },
      ];
      const result = [...array].sort(sortByProperty('post.dates', 'desc'));
      const expected = [
        {
          post: {
            dates: [new Date('2023-12-31'), new Date('2022-12-31'), new Date('2021-12-31')],
          },
        },
        {
          post: {
            dates: [new Date('2023-12-31'), new Date('2022-12-31'), new Date('2021-12-31')],
          },
        },
        {
          post: {
            dates: [new Date('2023-12-31'), new Date('2022-12-31'), new Date('2021-12-31')],
          },
        },
      ];

      expect(result).toEqual(expected);
    });

    it('should sort an array ascending by nested date array property', () => {
      const array = [
        {
          post: {
            dates: [new Date('2023-12-31'), new Date('2022-12-31'), new Date('2021-12-31')],
          },
        },
        {
          post: {
            dates: [new Date('2021-12-31'), new Date('2023-12-31'), new Date('2022-12-31')],
          },
        },
        {
          post: {
            dates: [new Date('2022-12-31'), new Date('2023-12-31'), new Date('2021-12-31')],
          },
        },
      ];
      const result = [...array].sort(sortByProperty('post.dates', 'asc'));
      const expected = [
        {
          post: {
            dates: [new Date('2021-12-31'), new Date('2022-12-31'), new Date('2023-12-31')],
          },
        },
        {
          post: {
            dates: [new Date('2021-12-31'), new Date('2022-12-31'), new Date('2023-12-31')],
          },
        },
        {
          post: {
            dates: [new Date('2021-12-31'), new Date('2022-12-31'), new Date('2023-12-31')],
          },
        },
      ];

      expect(result).toEqual(expected);
    });

    it('should sort an array ascending by nested number property', () => {
      const array = [{ post: { id: 3 } }, { post: { id: 2 } }, { post: { id: 1 } }];
      const result = [...array].sort(sortByProperty('post.id', 'asc'));
      const expected = [{ post: { id: 1 } }, { post: { id: 2 } }, { post: { id: 3 } }];

      expect(result).toEqual(expected);
    });

    it('should sort an array descending by nested number property', () => {
      const array = [{ post: { id: 1 } }, { post: { id: 2 } }, { post: { id: 3 } }];
      const result = [...array].sort(sortByProperty('post.id', 'desc'));
      const expected = [{ post: { id: 3 } }, { post: { id: 2 } }, { post: { id: 1 } }];

      expect(result).toEqual(expected);
    });

    it('should sort an array ascending by the id property', () => {
      const array = [{ id: 3 }, { id: 2 }, { id: 1 }];
      const result = [...array].sort(sortByProperty('id', 'asc'));
      const expected = [{ id: 1 }, { id: 2 }, { id: 3 }];

      expect(result).toEqual(expected);
    });

    it('should sort an array descending by the id property', () => {
      const array = [{ id: 1 }, { id: 2 }, { id: 3 }];
      const result = [...array].sort(sortByProperty('id', 'desc'));
      const expected = [{ id: 3 }, { id: 2 }, { id: 1 }];

      expect(result).toEqual(expected);
    });

    it('should sort an array ascending by the firstName property', () => {
      const array = [
        { firstName: 'Xander' },
        { firstName: 'Jan' },
        { firstName: 'Bert' },
        { firstName: 'Anton' },
      ];
      const result = [...array].sort(sortByProperty('firstName', 'asc'));
      const expected = [
        { firstName: 'Anton' },
        { firstName: 'Bert' },
        { firstName: 'Jan' },
        { firstName: 'Xander' },
      ];

      expect(result).toEqual(expected);
    });

    it('should sort an array descending by the firstName property', () => {
      const array = [
        { firstName: 'Anton' },
        { firstName: 'Bert' },
        { firstName: 'Jan' },
        { firstName: 'Xander' },
      ];
      const result = [...array].sort(sortByProperty('firstName', 'desc'));
      const expected = [
        { firstName: 'Xander' },
        { firstName: 'Jan' },
        { firstName: 'Bert' },
        { firstName: 'Anton' },
      ];

      expect(result).toEqual(expected);
    });

    it('should sort an array ascending by the date property', () => {
      const array = [
        { date: new Date('2021-12-31') },
        { date: new Date('2020-12-31') },
        { date: new Date('2019-12-31') },
      ];
      const result = [...array].sort(sortByProperty('date', 'asc'));
      const expected = [
        { date: new Date('2019-12-31') },
        { date: new Date('2020-12-31') },
        { date: new Date('2021-12-31') },
      ];

      expect(result).toEqual(expected);
    });

    it('should sort an array descending by the date property', () => {
      const array = [
        { date: new Date('2019-12-31') },
        { date: new Date('2020-12-31') },
        { date: new Date('2021-12-31') },
      ];
      const result = [...array].sort(sortByProperty('date', 'desc'));
      const expected = [
        { date: new Date('2021-12-31') },
        { date: new Date('2020-12-31') },
        { date: new Date('2019-12-31') },
      ];

      expect(result).toEqual(expected);
    });

    it('should sort an array ascending by the number property', () => {
      const array = [{ number: '1' }, { number: '22' }, { number: '2.2' }];
      const result = [...array].sort(sortByProperty('number', 'asc'));
      const expected = [{ number: '1' }, { number: '2.2' }, { number: '22' }];

      expect(result).toEqual(expected);
    });

    it('should sort an array descending by the number property', () => {
      const array = [{ number: '1' }, { number: '22' }, { number: '2.2' }];
      const result = [...array].sort(sortByProperty('number', 'desc'));
      const expected = [{ number: '22' }, { number: '2.2' }, { number: '1' }];

      expect(result).toEqual(expected);
    });

    it('should sort an array ascending by the id property with null values', () => {
      const array = [{ id: 3 }, { id: null }, { id: 1 }];
      const result = [...array].sort(sortByProperty('id', 'asc'));
      const expected = [{ id: 1 }, { id: 3 }, { id: null }];

      expect(result).toEqual(expected);
    });

    it('should sort an array descending by the id property with null values', () => {
      const array = [{ id: 1 }, { id: null }, { id: 3 }];
      const result = [...array].sort(sortByProperty('id', 'desc'));
      const expected = [{ id: 3 }, { id: 1 }, { id: null }];

      expect(result).toEqual(expected);
    });

    it('should sort an array ascending by the id property with null values', () => {
      const array = [{ id: 3 }, { id: undefined }, { id: 1 }];
      const result = [...array].sort(sortByProperty('id', 'asc'));
      const expected = [{ id: 1 }, { id: 3 }, { id: undefined }];

      expect(result).toEqual(expected);
    });

    it('should sort an array descending by the id property with undefined values', () => {
      const array = [{ id: 1 }, { id: undefined }, { id: 3 }];
      const result = [...array].sort(sortByProperty('id', 'desc'));
      const expected = [{ id: 3 }, { id: 1 }, { id: undefined }];

      expect(result).toEqual(expected);
    });
  });
});
