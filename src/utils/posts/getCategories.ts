import { ICategory } from '@/types/mdx.types';
import { parseJson } from './parseJson';

export const getCategories = () => {
  const posts = parseJson();

  const categoriesArray: string[] = [];

  posts.forEach((post) => {
    categoriesArray.push(post.frontMatter.category);
  });

  return categoriesArray.reduce(
    (acc: ICategory[], curr) => {
      const categoryInfo = acc.find((item) => item.category === curr);

      if (categoryInfo) {
        categoryInfo.count++;
      } else {
        acc.push({ category: curr, icon: 'material-symbols:folder', count: 1, });
      }

      return acc;
    },
    []
  );
};
