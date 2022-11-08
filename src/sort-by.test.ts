import { sortBy, sortByProperty } from '@/sort-by';

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
      const array = [{ topic: { name: 3 } }, { topic: { name: 2 } }, { topic: { name: 'A' } }];
      const resultFn = () => [...array].sort(sortByProperty('topic.name', 'asc'));

      expect(resultFn).toThrowError();
    });

    it('should throw an error when property types are not the same when sorting in descending direction', () => {
      const array = [{ topic: { name: 3 } }, { topic: { name: 2 } }, { topic: { name: 'A' } }];
      const resultFn = () => [...array].sort(sortByProperty('topic.name', 'desc'));

      expect(resultFn).toThrowError();
    });

    it('should sort an array ascending by nested string property', () => {
      const array = [{ topic: { name: 'C' } }, { topic: { name: 'B' } }, { topic: { name: 'A' } }];
      const result = [...array].sort(sortByProperty('topic.name', 'asc'));
      const expected = [
        { topic: { name: 'A' } },
        { topic: { name: 'B' } },
        { topic: { name: 'C' } },
      ];

      expect(result).toEqual(expected);
    });

    it('should sort an array descending by nested string property', () => {
      const array = [{ topic: { name: 'A' } }, { topic: { name: 'B' } }, { topic: { name: 'C' } }];
      const result = [...array].sort(sortByProperty('topic.name', 'desc'));
      const expected = [
        { topic: { name: 'C' } },
        { topic: { name: 'B' } },
        { topic: { name: 'A' } },
      ];

      expect(result).toEqual(expected);
    });

    it('should sort an array descending by nested string property', () => {
      const array = [
        { topic: { names: ['C', 'B', 'A'] } },
        { topic: { names: ['A', 'C', 'B'] } },
        { topic: { names: ['B', 'C', 'A'] } },
      ];
      const result = [...array].sort(sortByProperty('topic.names', 'desc'));
      const expected = [
        { topic: { names: ['C', 'B', 'A'] } },
        { topic: { names: ['C', 'B', 'A'] } },
        { topic: { names: ['C', 'B', 'A'] } },
      ];

      expect(result).toEqual(expected);
    });

    it('should sort an array ascending by nested string array property', () => {
      const array = [
        { topic: { names: ['C', 'B', 'A'] } },
        { topic: { names: ['A', 'C', 'B'] } },
        { topic: { names: ['B', 'C', 'A'] } },
      ];
      const result = [...array].sort(sortByProperty('topic.names', 'asc'));
      const expected = [
        { topic: { names: ['A', 'B', 'C'] } },
        { topic: { names: ['A', 'B', 'C'] } },
        { topic: { names: ['A', 'B', 'C'] } },
      ];

      expect(result).toEqual(expected);
    });

    it('should sort an array descending by nested string array property', () => {
      const array = [
        { topic: { ids: [3, 2, 1] } },
        { topic: { ids: [1, 3, 2] } },
        { topic: { ids: [2, 3, 1] } },
      ];
      const result = [...array].sort(sortByProperty('topic.ids', 'desc'));
      const expected = [
        { topic: { ids: [3, 2, 1] } },
        { topic: { ids: [3, 2, 1] } },
        { topic: { ids: [3, 2, 1] } },
      ];

      expect(result).toEqual(expected);
    });

    it('should sort an array ascending by nested numbers array property', () => {
      const array = [
        { topic: { ids: [3, 2, 1] } },
        { topic: { ids: [1, 3, 2] } },
        { topic: { ids: [2, 3, 1] } },
      ];
      const result = [...array].sort(sortByProperty('topic.ids', 'asc'));
      const expected = [
        { topic: { ids: [1, 2, 3] } },
        { topic: { ids: [1, 2, 3] } },
        { topic: { ids: [1, 2, 3] } },
      ];

      expect(result).toEqual(expected);
    });

    it('should sort an array descending by nested date array property', () => {
      const array = [
        {
          topic: {
            ids: [new Date('2023-12-31'), new Date('2022-12-31'), new Date('2021-12-31')],
          },
        },
        {
          topic: {
            ids: [new Date('2021-12-31'), new Date('2023-12-31'), new Date('2022-12-31')],
          },
        },
        {
          topic: {
            ids: [new Date('2022-12-31'), new Date('2023-12-31'), new Date('2021-12-31')],
          },
        },
      ];
      const result = [...array].sort(sortByProperty('topic.ids', 'desc'));
      const expected = [
        {
          topic: {
            ids: [new Date('2023-12-31'), new Date('2022-12-31'), new Date('2021-12-31')],
          },
        },
        {
          topic: {
            ids: [new Date('2023-12-31'), new Date('2022-12-31'), new Date('2021-12-31')],
          },
        },
        {
          topic: {
            ids: [new Date('2023-12-31'), new Date('2022-12-31'), new Date('2021-12-31')],
          },
        },
      ];

      expect(result).toEqual(expected);
    });

    it('should sort an array ascending by nested date array property', () => {
      const array = [
        {
          topic: {
            dates: [new Date('2023-12-31'), new Date('2022-12-31'), new Date('2021-12-31')],
          },
        },
        {
          topic: {
            dates: [new Date('2021-12-31'), new Date('2023-12-31'), new Date('2022-12-31')],
          },
        },
        {
          topic: {
            dates: [new Date('2022-12-31'), new Date('2023-12-31'), new Date('2021-12-31')],
          },
        },
      ];
      const result = [...array].sort(sortByProperty('topic.dates', 'asc'));
      const expected = [
        {
          topic: {
            dates: [new Date('2021-12-31'), new Date('2022-12-31'), new Date('2023-12-31')],
          },
        },
        {
          topic: {
            dates: [new Date('2021-12-31'), new Date('2022-12-31'), new Date('2023-12-31')],
          },
        },
        {
          topic: {
            dates: [new Date('2021-12-31'), new Date('2022-12-31'), new Date('2023-12-31')],
          },
        },
      ];

      expect(result).toEqual(expected);
    });

    it('should sort an array ascending by nested number property', () => {
      const array = [{ topic: { id: 3 } }, { topic: { id: 2 } }, { topic: { id: 1 } }];
      const result = [...array].sort(sortByProperty('topic.id', 'asc'));
      const expected = [{ topic: { id: 1 } }, { topic: { id: 2 } }, { topic: { id: 3 } }];

      expect(result).toEqual(expected);
    });

    it('should sort an array descending by nested number property', () => {
      const array = [{ topic: { id: 1 } }, { topic: { id: 2 } }, { topic: { id: 3 } }];
      const result = [...array].sort(sortByProperty('topic.id', 'desc'));
      const expected = [{ topic: { id: 3 } }, { topic: { id: 2 } }, { topic: { id: 1 } }];

      expect(result).toEqual(expected);
    });

    it('should sort an array ascending by the order property', () => {
      const array = [{ order: 3 }, { order: 2 }, { order: 1 }];
      const result = [...array].sort(sortByProperty('order', 'asc'));
      const expected = [{ order: 1 }, { order: 2 }, { order: 3 }];

      expect(result).toEqual(expected);
    });

    it('should sort an array descending by the order property', () => {
      const array = [{ order: 1 }, { order: 2 }, { order: 3 }];
      const result = [...array].sort(sortByProperty('order', 'desc'));
      const expected = [{ order: 3 }, { order: 2 }, { order: 1 }];

      expect(result).toEqual(expected);
    });

    it('should sort an array ascending by the name property', () => {
      const array = [{ name: 'Xander' }, { name: 'Jan' }, { name: 'Bert' }, { name: 'Anton' }];
      const result = [...array].sort(sortByProperty('name', 'asc'));
      const expected = [{ name: 'Anton' }, { name: 'Bert' }, { name: 'Jan' }, { name: 'Xander' }];

      expect(result).toEqual(expected);
    });

    it('should sort an array descending by the name property', () => {
      const array = [{ name: 'Anton' }, { name: 'Bert' }, { name: 'Jan' }, { name: 'Xander' }];
      const result = [...array].sort(sortByProperty('name', 'desc'));
      const expected = [{ name: 'Xander' }, { name: 'Jan' }, { name: 'Bert' }, { name: 'Anton' }];

      expect(result).toEqual(expected);
    });

    it('should sort an array ascending by the id property', () => {
      const array = [{ id: 30 }, { id: 20 }, { id: 10 }];
      const result = [...array].sort(sortByProperty('id', 'asc'));
      const expected = [{ id: 10 }, { id: 20 }, { id: 30 }];

      expect(result).toEqual(expected);
    });

    it('should sort an array descending by the id property', () => {
      const array = [{ id: 10 }, { id: 20 }, { id: 30 }];
      const result = [...array].sort(sortByProperty('id', 'desc'));
      const expected = [{ id: 30 }, { id: 20 }, { id: 10 }];

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
  });
});
