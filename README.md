# Typed sortBy

A type safe array sorting method with autocompletion of nested properties

## Installation

Install with your favorite package manager:

`not ready yet`

## Usage

```typescript
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
    title: 'A title',
    author: {
      id: 10,
      name: 'Joe',
    },
  },
  {
    id: 2,
    title: 'Better title',
    author: {
      id: 20,
      name: 'Ben',
    },
  },
  {
    id: 3,
    title: 'Cake title',
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
  { id: 3, title: 'Cake title', author: { id: 30, name: 'Alice' } },
  { id: 2, title: 'Better title', author: { id: 20, name: 'Ben' } },
  { id: 1, title: 'A title', author: { id: 10, name: 'Joe' } },
];
```

Will show a type error when you try to sort on properties that do not exist:


![type-error-example](https://github.com/jvandenaardweg/typed-sort-by/blob/main/src/examples/type-error-example.png?raw=true)

Will show an autocomplete of the available properties to sort on:

![autocomplete](https://github.com/jvandenaardweg/typed-sort-by/blob/main/src/examples/autocomplete.png?raw=true)
