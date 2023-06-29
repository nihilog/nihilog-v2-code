import { GetStaticPaths, GetStaticProps } from 'next';
import React from 'react';
import tw, { css } from 'twin.macro';
import { v4 as uuid } from 'uuid';
import { AppLayout } from '@/layouts';
import { getClusterList, getItemDataPage } from '@/utils/posts';
import { IClusterPage, IMDXList } from '@/types/mdx.types';
import { Heading, PageLink } from '@/components/Base';
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
      tw`  `,
    ]),
    number: css([
      tw`  `,
    ]),
  };

  return (
    <>
      <AppLayout title=''>
        <div css={style.default}>
          <Heading type='h2' mode='sub-title'>
            {`'${cluster}'`} 시리즈 포스트 목록
          </Heading>
          <div>
            {posts?.map((post, index) => (
              <div key={uuid()}>
                <span css={style.number}>{index + 1}</span>
                <PageLink href={post.fullPath}>
                  <span css={style.link}>{post.frontMatter.title}</span>
                </PageLink>
              </div>
            ))}
          </div>
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
  console.log(params);

  return {
    props: {
      posts: getClusterList(params.cluster),
      cluster: params.cluster,
    },
  };
};
