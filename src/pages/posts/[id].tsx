import React, { useCallback } from 'react';
import tw, { css } from 'twin.macro';
import { GetStaticPaths, GetStaticProps } from 'next';
import { useRouter } from 'next/router';
import { AppLayout } from '@/layouts';
import { getSinglePost, getYear, parseJson } from '@/utils/posts';
import { IMDX } from '@/types/mdx.types';
import { PostMD } from '@/components/Content/MDX';
import { PostInfo } from '@/components/Content';

interface Props {
  post: IMDX;
}

export default function PostPage({ post, }: Props) {
  const router = useRouter();

  const onClickButton = useCallback(() => {
    router.back();
  }, [ router, ]);

  const style = {
    button: css([
      tw` block ml-auto mb-5 border border-blue-500/40 bg-blue-100 text-blue-600 p-1 px-3 rounded-1 hover:( text-white bg-blue-600 ) `,
    ]),
  };

  return (
    <>
      <AppLayout
        title={post.frontMatter.title}
        type='article'
        created={post.frontMatter.created as number}
        updated={post.frontMatter.updated as number}
        section={post.frontMatter.category}
        tags={post.frontMatter.tags.join(',')}
        author='NIHILncunia'
      >
        <div>
          <button onClick={onClickButton} css={style.button}>목록으로</button>
          <PostInfo post={post} />
          <PostMD
            content={post.content}
            cover={post.frontMatter.cover}
            title={post.frontMatter.title}
          />
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
