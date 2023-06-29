import React from 'react';
import tw, { css } from 'twin.macro';
import { GetStaticProps } from 'next';
import { AppLayout } from '@/layouts';
import { Heading } from '@/components/Base';
import { ItemList } from '@/components/Content';
import { IItemData } from '@/types/mdx.types';
import { getItemData } from '@/utils/posts';

interface Props {
  clusters: IItemData[];
}

export default function ClusterIndexPage({ clusters, }: Props) {
  const style = {
    default: css([
      tw`  `,
    ]),
  };

  return (
    <>
      <AppLayout title='시리즈 목록'>
        <div css={style.default}>
          <Heading mode='sub-title' type='h2'>시리즈 목록</Heading>
          <ItemList type='cluster' data={clusters} />
        </div>
      </AppLayout>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      clusters: getItemData('cluster'),
    },
  };
};
