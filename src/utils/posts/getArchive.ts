import { IArchive } from '@/types/mdx.types';
import { parseJson } from './parseJson';

export const getArchive = () => {
  const slugs: string[] = [];
  parseJson().forEach((post) => {
    const yearMonth = post.slug.match((/(^\d{4}-\d{2})/));

    slugs.push(yearMonth[0]);
  });

  return slugs.reduce(
    (acc: IArchive[], curr) => {
      const archiveInfo = acc.find((item) => item.archive === curr);

      if (archiveInfo) {
        archiveInfo.count++;
      } else {
        acc.push({ archive: curr, icon: 'material-symbols:archive', count: 1, });
      }

      return acc;
    },
    []
  );
};
