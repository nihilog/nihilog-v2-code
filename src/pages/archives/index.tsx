import { GetStaticProps } from 'next';
import React from 'react';
import tw, { css } from 'twin.macro';
import { getArchive, getArchivePage } from '@/utils/posts';
import { IArchive } from '@/types/mdx.types';
import { AppLayout } from '@/layouts';
import { Heading } from '@/components/Base';
import { ItemList } from '@/components/Content';

interface Props {
  archives: IArchive[];
}

export default function ArchiveIndexPage({ archives, }: Props) {
  const style = {
    default: css([
      tw`  `,
    ]),
  };

  return (
    <>
      <AppLayout title='아카이브'>
        <div css={style.default}>
          <Heading mode='sub-title' type='h2'>아카이브</Heading>
          <ItemList type='archive' data={archives} />
        </div>
      </AppLayout>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const archives = getArchive();

  getArchivePage();

  return {
    props: {
      archives,
    },
  };
};
