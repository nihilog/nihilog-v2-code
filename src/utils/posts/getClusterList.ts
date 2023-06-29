import { parseJson } from './parseJson';

export const getClusterList = (keyword: string) => {
  const posts = parseJson();
  const clusterPosts = posts.filter((post) => {
    return post.frontMatter.cluster[0] === keyword;
  }).sort((a, b) => {
    return a.frontMatter.cluster[1] - b.frontMatter.cluster[1];
  });

  return clusterPosts;
};
