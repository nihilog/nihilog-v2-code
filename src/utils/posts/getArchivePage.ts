import { getArchive } from './getArchive';
import { getArchivePostList } from './getArchivePostList';

export const getArchivePage = () => {
  type IArchivePage = {
    params: {
      archive: string;
      page: string;
    }
  }

  const archivePageArray: IArchivePage[] = [];

  const archives = getArchive();

  archives.forEach((archiveData) => {
    // 해당 태그를 가진 포스트 목록을 가져온다.
    const archivePostList = getArchivePostList(archiveData.archive);
    // 총 페이지 수를 구한다.
    const totalPage = Math.ceil(archivePostList.length / 1);

    const pageArray = [ ...Array(totalPage).keys(), ].map(
      (item) => ({
        params: {
          archive: archiveData.archive,
          page: (item + 1).toString(),
        },
      })
    );

    archivePageArray.push(...pageArray);
  });

  console.log(archivePageArray);

  return archivePageArray;
};
