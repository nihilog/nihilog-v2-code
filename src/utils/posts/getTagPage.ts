import { getTagPostList } from './getTagPostList';
import { getTags } from './getTags';

export const getTagPage = () => {
  type ITagPage = {
    params: {
      tag: string;
      page: string;
    }
  }

  const tagPageArray: ITagPage[] = [];

  // 태그 목록도 가져온다
  const tags = getTags();

  tags.forEach((tagData) => {
    // 해당 태그를 가진 포스트 목록을 가져온다.
    const categoryPostList = getTagPostList(tagData.tag);
    // 총 페이지 수를 구한다.
    const totalPage = Math.ceil(categoryPostList.length / 1);

    const pageArray = [ ...Array(totalPage).keys(), ].map(
      (item) => ({
        params: {
          tag: tagData.tag,
          page: (item + 1).toString(),
        },
      })
    );

    tagPageArray.push(...pageArray);
  });

  return tagPageArray;
};
