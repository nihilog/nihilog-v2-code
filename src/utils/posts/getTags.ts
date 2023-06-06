import { ITag } from '@/types/mdx.types';
import { parseJson } from './parseJson';

export const getTags = () => {
  const posts = parseJson();

  const tagsArray: string[] = [];

  posts.forEach((post) => {
    tagsArray.push(...post.frontMatter.tags);
  });

  return tagsArray.reduce(
    (acc: ITag[], curr) => {
      const tagInfo = acc.find((item) => item.tag === curr);

      if (tagInfo) {
        tagInfo.count++;
      } else {
        acc.push({ tag: curr, icon: 'material-symbols:tag', count: 1, });
      }

      return acc;
    },
    []
  );
};
