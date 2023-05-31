import { parseJson } from './parseJson';

export const getCategoryPostList = (category: string) => {
  let posts = parseJson();

  return posts.filter((post) => post.frontMatter.category === category);
};
