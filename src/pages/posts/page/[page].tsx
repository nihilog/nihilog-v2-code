import React from 'react';
import tw, { css } from 'twin.macro';
import { GetStaticPaths, GetStaticProps } from 'next';
import { AppLayout } from '@/layouts';
import { parseJson } from '@/utils/posts/parseJson';
import { getPostList } from '@/utils/posts';

export default function PostListPage() {
  // TODO: 포스트 리스트 페이지 만들어둬야함.
  const style = {
    default: css([
      tw`  `,
    ]),
  };

  return (
    <>
      <AppLayout title='포스트 목록'>
        <div css={style.default}>content</div>
      </AppLayout>
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const posts = parseJson();
  const totalPage = Math.ceil(posts.length / 10);

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
  const pagePosts = await getPostList(+params.page, 10);
  console.log(pagePosts);

  return {
    props: {
      pagePosts,
    },
  };
};
