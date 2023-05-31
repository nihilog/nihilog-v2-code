import React from 'react';
import tw, { css } from 'twin.macro';
import { GetStaticProps } from 'next';
import { AppLayout } from '@/layouts';
import { getCategories } from '@/utils/posts';
import { ICategory } from '@/types/mdx.types';
import { Heading } from '@/components/Base';
import { ItemList } from '@/components/Content';

interface Props {
  categories: ICategory[];
}

export default function index({ categories, }: Props) {
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
  const categories = getCategories();
  return {
    props: {
      categories,
    },
  };
};
