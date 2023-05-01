import { parseJson } from './parseJson';

export const getRecentPosts = () => {
  const posts = parseJson();

  return posts.slice(0, 6);
};
