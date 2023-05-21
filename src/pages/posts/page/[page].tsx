import React from 'react';
import tw, { css } from 'twin.macro';
import { GetStaticPaths, GetStaticProps } from 'next';
import { AppLayout } from '@/layouts';
import { parseJson } from '@/utils/posts/parseJson';
import { getPostList } from '@/utils/posts';
import { Pagination, PostList } from '@/components/Content';
import { IMDXList } from '@/types/mdx.types';

interface IPostListPage {
  totalPage: number;
  page: number;
  list: IMDXList[];
}

export default function PostListPage({ totalPage, page, list, }: IPostListPage) {
  // TODO: 포스트 리스트 페이지 만들어둬야함.
  const style = {
    default: css([
      tw`  `,
    ]),
  };

  return (
    <>
      <AppLayout title='포스트 목록'>
        <div css={style.default}>
          <PostList posts={list} />
          <Pagination currentPage={page} totalPage={totalPage} />
        </div>
      </AppLayout>
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const posts = parseJson();
  const totalPage = Math.ceil(posts.length / 1);

  return {
    paths: [ ...Array(totalPage).keys(), ].map((item) => ({
      params: {
        page: (item + 1).toString(),
      },
    })),
    fallback: false,
  };
};

type Params = {
  params: {
    page: string;
  }
};

export const getStaticProps: GetStaticProps = async ({ params, }: Params) => {
  const pagePosts = await getPostList(+params.page, 1);
  console.log(pagePosts);

  return {
    props: {
      ...pagePosts,
      page: +params.page,
    },
  };
};
