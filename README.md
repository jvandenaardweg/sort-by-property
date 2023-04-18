# sort-by-property [![npm version](https://badge.fury.io/js/sort-by-property.svg)](https://badge.fury.io/js/sort-by-property) [![mit license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/jvandenaardweg/sort-by-property/blob/main/LICENSE)

Type-safe array sorting method with support for deeply nested properties and Typescript autocompletion.

```typescript
blogPosts.sort(sortByProperty('author.name', 'asc'));
```

## Features

- Type-safety and Typescript autocompletion on the properties you try to sort
- Define nested property to sort on using a path string like: `"author.name"`
- Supports sorting by `string`, `number`, `boolean`, `Date`, `Symbol` and `BigInt` values
- Use a specific locale when sorting by `string`
- Handles `null` and `undefined` values gracefully by moving the object to the end of the array
- Small file size, only 0.6kb gzipped
- High performance, up to 3 times faster than lodash orderBy and sortBy \*

Try it out: https://codesandbox.io/s/sort-by-property-example-hin358

## Requirements

Requires Typescript 4.1+ because of the internal use of [template literals](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-4-1.html) for the autocompletion.

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
// For an array of objects
import { sortByProperty } from 'sort-by-property';

// For one-dimensional arrays
import { sortBy } from 'sort-by-property';
```

## Example: Sorting an array of objects

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
    title: 'Never gonna run around and desert you',
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

// If you need to use a custom locale for sorting strings, you can do
blogPosts.sort(sortByProperty('author.name', 'asc', {locale: 'nb-no'}))
```

Will sort the array `ascending` by `author.name`:

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

## Example: Sorting one-dimensional arrays

This package exports 2 methods. Use `sortBy` to sort one-dimensional arrays. This sorting method supports all the same types as `sortByProperty`.

```typescript
import { sortBy } from 'sort-by-property';

const array = ['c', 'b', 'a'];

array.sort(sortBy('asc'));

// Result: ['a', 'b', 'c']
```

<sub>\* on an array with 10 million items: ~450ms vs ~1350ms. See the /src/examples directory.</sub>
