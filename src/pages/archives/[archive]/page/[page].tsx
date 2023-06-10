import React from 'react';
import tw, { css } from 'twin.macro';
import { GetStaticPaths, GetStaticProps } from 'next';
import { IArchivePage, IMDXList } from '@/types/mdx.types';
import { AppLayout } from '@/layouts';
import { Heading } from '@/components/Base';
import { Pagination, PostList } from '@/components/Content';
import { getItemDataPage, getPostList } from '@/utils/posts';

interface Props {
  totalPage: number;
  page: number;
  list: IMDXList[];
  archive: string;
}

export default function ArchivePage({
  totalPage, page, list, archive,
}: Props) {
  const style = {
    default: css([
      tw`  `,
    ]),
  };

  return (
    <>
      <AppLayout title={`'${archive}' 포스트 목록`}>
        <div css={style.default}>
          <Heading type='h2' mode='sub-title'>
            {`'${archive}'`} 포스트 목록 총 {list.length}건
          </Heading>
          <PostList posts={list} />
          <Pagination currentPage={page} totalPage={totalPage} type='archive' keyword={archive} />
        </div>
      </AppLayout>
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: getItemDataPage('archive') as IArchivePage[],
    fallback: false,
  };
};

type Params = {
  params: {
    page: string;
    archive: string;
  }
};

export const getStaticProps: GetStaticProps = async ({ params, }: Params) => {
  const posts = await getPostList(+params.page, 10, 'archive', params.archive);
  return {
    props: {
      ...posts,
      archive: params.archive,
      page: +params.page,
    },
  };
};
