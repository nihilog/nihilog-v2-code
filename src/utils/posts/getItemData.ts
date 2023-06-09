import { IItemData } from '@/types/mdx.types';
import { parseJson } from './parseJson';

export const getItemData = (type: ('tag' | 'category' | 'archive' | 'cluster')) => {
  const items: string[] = [];

  parseJson().forEach((post) => {
    if (type === 'tag') {
      items.push(...post.frontMatter.tags);
    } else if (type === 'category') {
      items.push(post.frontMatter.category);
    } else if (type === 'archive') {
      const yearMonth = post.slug.match((/(^\d{4}-\d{2})/));

      items.push(yearMonth[0]);
    } else if (type === 'cluster') {
      if (post.frontMatter.cluster.length > 0) {
        items.push(post.frontMatter.cluster[0]);
      }
    }
  });

  return items.reduce((acc: IItemData[], curr) => {
    const itemInfo = acc.find((item) => item.data === curr);
    let icon = type === 'tag'
      ? 'material-symbols:tag'
      : type === 'category'
        ? 'material-symbols:folder'
        : type === 'archive'
          ? 'material-symbols:archive'
          : 'fluent:board-24-filled';

    if (itemInfo) {
      itemInfo.count++;
    } else {
      acc.push({ data: curr, icon, count: 1, });
    }

    return acc;
  }, []);
};
