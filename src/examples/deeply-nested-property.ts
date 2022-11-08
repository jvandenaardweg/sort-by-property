import { sortByProperty } from '@/sort-by';
import util from 'util';

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

const sortedBlogPosts = [...blogPosts].sort(sortByProperty('author.location.city', 'asc'));

console.log('==================== before sort ====================');
console.log(util.inspect(blogPosts, { depth: 3, colors: true }));
console.log('==================== after sort ====================');
console.log(util.inspect(sortedBlogPosts, { depth: 3, colors: true }));
