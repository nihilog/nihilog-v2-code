import React from 'react';
import tw, { css } from 'twin.macro';
import { GetStaticProps } from 'next';
import { Heading } from '@/components/Base';
import { ItemList } from '@/components/Content';
import { AppLayout } from '@/layouts';
import { getTags } from '@/utils/posts';
import { ITag } from '@/types/mdx.types';

interface Props {
  tags: ITag[];
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
  const tags = getTags();

  return {
    props: {
      tags,
    },
  };
};
