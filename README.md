# sort-by-property [![npm version](https://badge.fury.io/js/sort-by-property.svg)](https://badge.fury.io/js/sort-by-property) [![mit license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/jvandenaardweg/sort-by-property/blob/main/LICENSE)

Type-safe array sorting method with support for deeply nested properties and Typescript autocompletion.

```typescript
blogPosts.sort(sortByProperty('author.name', 'asc'));
```

## Features

- Type-safety and Typescript autocompletion on the properties you try to sort
- Define nested property to sort on using a path string like: `"author.name"`
- Supports sorting by `string`, `number`, `Date`, `Symbol` and `BigInt` values.
- Handles `null` and `undefined` values gracefully by moving the object to the end of the array.
- High performance, up to 3 times faster than lodash `orderBy` and `sortBy` on an array with 10 million items: ~450ms vs ~1350ms.

## Installation

Install with your favorite package manager:

```bash
npm install sort-by-property
```

or

```bash
yarn add sort-by-property
```

## Usage

```typescript
import { sortByProperty } from 'sort-by-property';

interface BlogPost {
  id: number;
  title: string;
  author: {
    id: number;
    name: string;
  };
}

const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: Never gonna run around and desert you,
    author: {
      id: 10,
      name: 'Joe',
    },
  },
  {
    id: 2,
    title: 'Never gonna let you down',
    author: {
      id: 20,
      name: 'Ben',
    },
  },
  {
    id: 3,
    title: 'Never gonna give you up',
    author: {
      id: 30,
      name: 'Alice',
    },
  },
];

// Sort the blog posts by author name
blogPosts.sort(sortByProperty('author.name', 'asc'));
```

Will sort the array by `author.name`:

```typescript
[
  { id: 3, title: 'Never gonna give you up', author: { id: 30, name: 'Alice' } },
  { id: 2, title: 'Never gonna let you down', author: { id: 20, name: 'Ben' } },
  { id: 1, title: 'Never gonna run around and desert you', author: { id: 10, name: 'Joe' } },
];
```

Will show a type error when you try to sort on properties that do not exist:

![type-error-example](https://github.com/jvandenaardweg/typed-sort-by/blob/main/src/examples/type-error-example.png?raw=true)

Will show an autocomplete of the available properties to sort on:

![autocomplete](https://github.com/jvandenaardweg/typed-sort-by/blob/main/src/examples/autocomplete.png?raw=true)
