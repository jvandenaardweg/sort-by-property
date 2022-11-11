// import { orderByProperty } from '../sort-by';
import _orderBy from 'lodash.orderby';

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

const array = Array<BlogPost>(10_000_000).fill(blogPost);

console.time('perf');

const sorted = _orderBy(array, ['id'], ['asc']);

console.log(sorted);

console.timeEnd('perf');
