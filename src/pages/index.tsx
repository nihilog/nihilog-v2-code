import React from 'react';
import tw, { css } from 'twin.macro';
import { GetStaticProps } from 'next';
import { AppLayout } from '@/layouts';
import { getCategories, getRecentPosts } from '@/utils/posts';
import { IMDXList } from '@/types/mdx.types';
import { PostList } from '@/components/Content';
import { Heading, PageLink } from '@/components/Base';

interface Props {
  posts: IMDXList[];
}

export default function IndexPage({ posts, }: Props) {
  const style = {
    default: css([
      tw`  `,
    ]),
    postList: css([
      tw` flex flex-col gap-5 `,
    ]),
  };

  return (
    <>
      <AppLayout title='홈'>
        <div css={style.default}>
          <Heading type='h2' mode='sub-title'>최근 포스트</Heading>
          <PostList posts={posts} />
          <PageLink mode='button' styles={tw`mt-10 w-full`} href='/posts/page/1'>목록 더 보기</PageLink>
        </div>
      </AppLayout>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const posts = getRecentPosts();
  const categories = getCategories();

  console.log(categories);

  return {
    props: {
      posts,
    },
  };
};
