import { parseJson } from './parseJson';

type IPostListType = ('normal' | 'category' | 'tag' | 'archive');
export const getPostList = async (
  page: number,
  limit: number,
  type: IPostListType = 'normal',
  keyword = ''
) => {
  let posts = parseJson();

  if (type === 'category') {
    posts = posts.filter(
      (post) => post.frontMatter.category === keyword
    );
  } else if (type === 'tag') {
    posts = posts.filter(
      (post) => post.frontMatter.tags.includes(keyword)
    );
  } else if (type === 'archive') {
    posts = posts.filter(
      (post) => post.slug.match(keyword) !== null
    );
  }

  const start = (page - 1) * limit;
  const end = start + limit;

  return {
    totalPage: Math.ceil(posts.length / limit),
    list: posts.slice(start, end),
  };
};
