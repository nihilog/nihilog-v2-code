import { getCategoryPostList } from './getCatagoryPostList';
import { getCategories } from './getCategories';

export const getCategoryPage = () => {
  type ICategoryPage = {
    params: {
      category: string;
      page: string;
    }
  }

  const categoryPageArray: ICategoryPage[] = [];

  // 카테고리 목록도 가져온다
  const categories = getCategories();

  categories.forEach((categoryData) => {
    // 해당 카테고리를 가진 포스트 목록을 가져온다.
    const categoryPostList = getCategoryPostList(categoryData.category);
    // 총 페이지 수를 구한다.
    const totalPage = Math.ceil(categoryPostList.length / 1);

    const pageArray = [ ...Array(totalPage).keys(), ].map(
      (item) => ({
        params: {
          category: categoryData.category,
          page: (item + 1).toString(),
        },
      })
    );

    categoryPageArray.push(...pageArray);
  });

  return categoryPageArray;
};
