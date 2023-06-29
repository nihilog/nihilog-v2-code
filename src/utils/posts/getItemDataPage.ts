import {
  IArchivePage, ICategoryPage, IClusterPage, IMDXList, ITagPage
} from '@/types/mdx.types';
import { getItemData } from './getItemData';
import { parseJson } from './parseJson';

export const getItemDataPage = (type: ('tag' | 'category' | 'archive' | 'cluster')) => {
  const categoryPageArray: ICategoryPage[] = [];
  const tagPageArray: ITagPage[] = [];
  const archivePageArray: IArchivePage[] = [];
  const clusterPageArray: IClusterPage[] = [];

  const itemData = getItemData(type);

  itemData.forEach((item) => {
    let postList: IMDXList[];

    if (type === 'tag') {
      postList = parseJson().filter(
        (post) => post.frontMatter.tags.includes(item.data)
      );
    } else if (type === 'category') {
      postList = parseJson().filter(
        (post) => post.frontMatter.category === item.data
      );
    } else if (type === 'archive') {
      postList = parseJson().filter(
        (post) => post.slug.match(item.data) !== null
      );
    } else if (type === 'cluster') {
      postList = parseJson().filter((post) => {
        return post.frontMatter.cluster.length > 0;
      });
    }

    const totalPage = postList.length;

    [ ...Array(totalPage).keys(), ].forEach(
      (number) => {
        if (type === 'tag') {
          tagPageArray.push({
            params: {
              tag: item.data,
              page: (number + 1).toString(),
            },
          });
        } else if (type === 'category') {
          categoryPageArray.push({
            params: {
              category: item.data,
              page: (number + 1).toString(),
            },
          });
        } else if (type === 'archive') {
          archivePageArray.push({
            params: {
              archive: item.data,
              page: (number + 1).toString(),
            },
          });
        } else if (type === 'cluster') {
          clusterPageArray.push({
            params: {
              cluster: item.data,
              page: (number + 1).toString(),
            },
          });
        }
      }
    );
  });

  if (type === 'tag') {
    return tagPageArray;
  } else if (type === 'category') {
    return categoryPageArray;
  } else if (type === 'archive') {
    return archivePageArray;
  } else if (type === 'cluster') {
    return clusterPageArray;
  }
};
