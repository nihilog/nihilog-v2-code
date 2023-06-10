import React from 'react';
import tw, { css } from 'twin.macro';
import { GetStaticPaths, GetStaticProps } from 'next';
import { IMDXList, ITagPage } from '@/types/mdx.types';
import { AppLayout } from '@/layouts';
import { Heading } from '@/components/Base';
import { Pagination, PostList } from '@/components/Content';
import { getItemDataPage, getPostList } from '@/utils/posts';

interface Props {
  totalPage: number;
  page: number;
  list: IMDXList[];
  tag: string;
}

export default function TagPage({
  totalPage, page, list, tag,
}: Props) {
  const style = {
    default: css([
      tw`  `,
    ]),
  };

  return (
    <>
      <AppLayout title={`'${tag}' 태그 관련 포스트 목록`}>
        <div css={style.default}>
          <Heading type='h2' mode='sub-title'>
            {`'${tag}'`} 태그 관련 포스트 목록 총 {list.length}건
          </Heading>
          <PostList posts={list} />
          <Pagination currentPage={page} totalPage={totalPage} type='tag' keyword={tag} />
        </div>
      </AppLayout>
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: getItemDataPage('tag') as ITagPage[],
    fallback: false,
  };
};

type Params = {
  params: {
    page: string;
    tag: string;
  }
};

export const getStaticProps: GetStaticProps = async ({ params, }: Params) => {
  const posts = await getPostList(+params.page, 10, 'tag', params.tag);
  return {
    props: {
      ...posts,
      tag: params.tag,
      page: +params.page,
    },
  };
};
