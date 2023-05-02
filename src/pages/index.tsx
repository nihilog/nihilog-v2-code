import React from 'react';
import tw, { css } from 'twin.macro';
import { GetStaticProps } from 'next';
import { AppLayout } from '@/layouts';
import { getRecentPosts } from '@/utils/posts';
import { IMDXList } from '@/types/mdx.types';
import { PostItem } from '@/components/Content';
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
          <div css={style.postList}>
            {posts.map((post) => (
              <PostItem key={post.frontMatter.id} post={post} />
            ))}
          </div>
          <PageLink mode='button' href='/posts/page/1'>목록 더 보기</PageLink>
        </div>
      </AppLayout>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const posts = getRecentPosts();

  return {
    props: {
      posts,
    },
  };
};
