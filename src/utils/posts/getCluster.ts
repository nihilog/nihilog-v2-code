import { IItemData } from '@/types/mdx.types';
import { parseJson } from './parseJson';

export const getCluster = () => {
  const posts = parseJson();
  const filteredPosts = posts.filter((post) => post.frontMatter.cluster.length > 0);

  const clusters = filteredPosts.map((post) => post.frontMatter.cluster[0]);

  return clusters.reduce((acc: IItemData[], curr) => {
    const itemInfo = acc.find((item) => item.data === curr);

    if (itemInfo) {
      itemInfo.count++;
    } else {
      acc.push({
        data: curr,
        icon: 'fluent:board-24-filled',
        count: 1,
      });
    }

    return acc;
  }, []);
};
