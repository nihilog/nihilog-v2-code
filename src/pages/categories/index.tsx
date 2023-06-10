import React from 'react';
import tw, { css } from 'twin.macro';
import { GetStaticProps } from 'next';
import { AppLayout } from '@/layouts';
import { getItemData } from '@/utils/posts';
import { IItemData } from '@/types/mdx.types';
import { Heading } from '@/components/Base';
import { ItemList } from '@/components/Content';

interface Props {
  categories: IItemData[];
}

export default function CategoryIndexPage({ categories, }: Props) {
  const style = {
    default: css([
      tw`  `,
    ]),
  };

  return (
    <>
      <AppLayout title='카테고리'>
        <div css={style.default}>
          <Heading mode='sub-title' type='h2'>카테고리 목록</Heading>
          <ItemList type='category' data={categories} />
        </div>
      </AppLayout>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const categories = getItemData('category');

  return {
    props: {
      categories,
    },
  };
};
