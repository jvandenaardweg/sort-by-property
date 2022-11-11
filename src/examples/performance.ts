import { sortByProperty } from '../sort-by';

interface BlogPost {
  id: number;
  title: string;
  author: {
    id: number;
    name: string;
    location: {
      city: string;
    };
  };
}

const blogPost: BlogPost = {
  id: 1,
  title: 'A title',
  author: {
    id: 10,
    name: 'Joe',
    location: {
      city: 'Copenhagen',
    },
  },
};

const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: 'A title',
    author: {
      id: 10,
      name: 'Joe',
      location: {
        city: 'Copenhagen',
      },
    },
  },
  {
    id: 2,
    title: 'Better title',
    author: {
      id: 20,
      name: 'Ben',
      location: {
        city: 'Bangkok',
      },
    },
  },
  {
    id: 3,
    title: 'Cake title',
    author: {
      id: 30,
      name: 'Alice',
      location: {
        city: 'Amsterdam',
      },
    },
  },
];

const array = Array<BlogPost>(10000000).fill(blogPost);

console.time('perf');

const sorted = [...array].sort(sortByProperty('id', 'asc'));

console.log(sorted);

console.timeEnd('perf');
