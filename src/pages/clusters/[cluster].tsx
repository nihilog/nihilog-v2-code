import { GetStaticPaths, GetStaticProps } from 'next';
import React from 'react';
import tw, { css } from 'twin.macro';
import { v4 as uuid } from 'uuid';
import { AppLayout } from '@/layouts';
import { getClusterList, getItemDataPage } from '@/utils/posts';
import { IClusterPage, IMDXList } from '@/types/mdx.types';
import { Box, Heading, PageLink } from '@/components/Base';
import { textStyle } from '@/styles';

interface Props {
  posts: IMDXList[];
  cluster: string;
}

export default function ClusterPostListPage({ posts, cluster, }: Props) {
  const style = {
    default: css([
      tw`  `,
      textStyle.textSize,
    ]),
    link: css([
      tw` rounded-r-1 p-1 px-2 bg-black-100 border-t border-r border-b border-black-base/20 block flex-1 shrink-0 text-justify break-all `,
      tw` hover:( bg-royal-blue-100 text-royal-blue-600 border-royal-blue-600/20 ) `,
    ]),
    number: css([
      tw` rounded-l-1 p-1 px-3 flex items-center justify-end border border-black-500 bg-black-500 text-white `,
    ]),
    itemContainer: css([
      tw` flex flex-row mb-3 nth-last-1:mb-0 `,
    ]),
  };

  return (
    <>
      <AppLayout title={`'${cluster}' 시리즈 포스트 목록`}>
        <div css={style.default}>
          <Heading type='h2' mode='sub-title'>
            {`'${cluster}'`} 시리즈 포스트 목록
          </Heading>
          <Box>
            {posts?.map((post, index) => (
              <div key={uuid()} css={style.itemContainer}>
                <span css={style.number}>{index + 1}</span>
                <PageLink href={post.fullPath} styles={style.link}>
                  {post.frontMatter.title}
                </PageLink>
              </div>
            ))}
          </Box>
        </div>
      </AppLayout>
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: getItemDataPage('cluster') as IClusterPage[],
    fallback: false,
  };
};

type Params = {
  params: {
    page: string;
    cluster: string;
  }
};

export const getStaticProps: GetStaticProps = async ({ params, }: Params) => {
  return {
    props: {
      posts: getClusterList(params.cluster),
      cluster: params.cluster,
    },
  };
};
