import { parseJson } from './parseJson';

export const getPostList = async (page: number, limit: number) => {
  const posts = parseJson();

  const start = (page - 1) * limit;
  const end = start + limit;

  return {
    totalPage: Math.ceil(posts.length / limit),
    list: posts.slice(start, end),
  };
};
