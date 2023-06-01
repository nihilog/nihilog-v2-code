import { ITag } from '@/types/mdx.types';
import { parseJson } from './parseJson';

export const getTags = () => {
  const posts = parseJson();

  const tagsArray: string[] = [];

  posts.forEach((post) => {
    console.log('post.frontMatter.tags >> ', post.frontMatter.tags);
    tagsArray.push(...post.frontMatter.tags);
  });

  console.log('tagsArray >> ', tagsArray);

  return tagsArray.reduce(
    (acc: ITag[], curr) => {
      const tagInfo = acc.find((item) => item.tag === curr);

      if (tagInfo) {
        tagInfo.count++;
      } else {
        acc.push({ tag: curr, count: 1, });
      }

      return acc;
    },
    []
  );
};
