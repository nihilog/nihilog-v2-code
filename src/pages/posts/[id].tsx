import React from 'react';
import tw, { css } from 'twin.macro';
import { GetStaticPaths, GetStaticProps } from 'next';
import { AppLayout } from '@/layouts';
import { getSinglePost, getYear, parseJson } from '@/utils/posts';
import { IMDX } from '@/types/mdx.types';
import { PostMD } from '@/components/Content/MDX';

interface Props {
  post: IMDX;
}

export default function PostPage({ post, }: Props) {
  console.log(post);
  // TODO: 포스트 페이지 만들어야함.
  const style = {
    default: css([
      tw`  `,
    ]),
  };

  return (
    <>
      <AppLayout title={post.frontMatter.title}>
        <div css={style.default}>
          <PostMD content={post.content} />
        </div>
      </AppLayout>
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const posts = parseJson();

  return {
    paths: posts.map((path) => ({
      params: {
        id: path.frontMatter.id.toString(),
      },
    })),
    fallback: false,
  };
};

type Params = {
  params: {
    id: string;
  }
};

export const getStaticProps: GetStaticProps = async ({ params, }: Params) => {
  const postInfo = parseJson().find((post) => post.frontMatter.id === +params.id);

  const post = await getSinglePost(getYear(postInfo.slug), postInfo.slug);

  return {
    props: {
      post,
    },
  };
};
