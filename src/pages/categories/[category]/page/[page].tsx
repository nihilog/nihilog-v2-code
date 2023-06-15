import { GetStaticPaths, GetStaticProps } from 'next';
import React from 'react';
import tw, { css } from 'twin.macro';
import { getItemDataPage, getPostList } from '@/utils/posts';
import { ICategoryPage, IMDXList } from '@/types/mdx.types';
import { AppLayout } from '@/layouts';
import { Heading } from '@/components/Base';
import { Pagination, PostList } from '@/components/Content';
import { siteData } from '@/data';

interface Props {
  totalPage: number;
  page: number;
  list: IMDXList[];
  category: string;
}

export default function CategoryPage({
  totalPage, page, list, category,
}: Props) {
  const style = {
    default: css([
      tw`  `,
    ]),
  };

  return (
    <>
      <AppLayout title={`'${category}' 카테고리 관련 포스트 목록`}>
        <div css={style.default}>
          <Heading type='h2' mode='sub-title'>
            {`'${category}'`} 카테고리 관련 포스트 목록 총 {list.length}건
          </Heading>
          <PostList posts={list} />
          <Pagination currentPage={page} totalPage={totalPage} type='category' keyword={category} />
        </div>
      </AppLayout>
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: getItemDataPage('category') as ICategoryPage[],
    fallback: false,
  };
};

type Params = {
  params: {
    page: string;
    category: string;
  }
};

export const getStaticProps: GetStaticProps = async ({ params, }: Params) => {
  const posts = await getPostList(
    +params.page,
    siteData.postPerPage,
    'category',
    params.category
  );
  return {
    props: {
      ...posts,
      category: params.category,
      page: +params.page,
    },
  };
};
