import React from 'react';
import tw, { css } from 'twin.macro';
import { GetStaticProps } from 'next';
import { Heading } from '@/components/Base';
import { ItemList } from '@/components/Content';
import { AppLayout } from '@/layouts';
import { getItemData } from '@/utils/posts';
import { IItemData } from '@/types/mdx.types';

interface Props {
  tags: IItemData[];
}

export default function TagIndexPage({ tags, }: Props) {
  const style = {
    default: css([
      tw`  `,
    ]),
  };

  return (
    <>
      <AppLayout title='태그 클라우드'>
        <div css={style.default}>
          <Heading mode='sub-title' type='h2'>태그 클라우드</Heading>
          <ItemList type='tag' data={tags} />
        </div>
      </AppLayout>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const tags = getItemData('tag');

  return {
    props: {
      tags,
    },
  };
};
