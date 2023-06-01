import { parseJson } from './parseJson';

export const getTagPostList = (tag: string) => {
  let posts = parseJson();

  return posts.filter((post) => post.frontMatter.tags.includes(tag));
};
