/* istanbul ignore file */
import { sortByProperty } from '..';
import util from 'util';

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

const sortedBlogPosts = [...blogPosts].sort(sortByProperty('author.name', 'asc'));

console.log('==================== before sort ====================');
console.log(util.inspect(blogPosts, { depth: 3, colors: true }));
console.log('==================== after sort ====================');
console.log(util.inspect(sortedBlogPosts, { depth: 3, colors: true }));
