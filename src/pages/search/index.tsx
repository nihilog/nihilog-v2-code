import { GetStaticProps } from 'next';
import React, { useEffect, useState } from 'react';
import tw, { css } from 'twin.macro';
import { useRouter } from 'next/router';
import { parseJson } from '@/utils/posts';
import { AppLayout } from '@/layouts';
import { IMDXList } from '@/types/mdx.types';
import { Heading } from '@/components/Base';
import { PostList } from '@/components/Content';

interface Props {
  posts: IMDXList[];
}

export default function SearchResultPage({ posts, }: Props) {
  const [ searchPosts, setSearchPosts, ] = useState<IMDXList[]>([]);
  const router = useRouter();
  const { keyword, } = router.query as {keyword?: string};

  useEffect(() => {
    setSearchPosts(posts.filter(
      (post) => post.frontMatter.title.includes(keyword)
    ));
  }, [ posts, keyword, ]);

  const style = {
    default: css([
      tw`  `,
    ]),
  };

  return (
    <>
      <AppLayout title={`'${keyword}' 관련 포스트 총건`}>
        <div css={style.default}>
          {searchPosts.length === 0 && (
            <Heading type='h2' mode='message'>{`'${keyword}'`} 관련 포스트가 없습니다.</Heading>
          )}
          {searchPosts.length !== 0 && (
            <>
              <Heading type='h2' mode='sub-title'>
                {`'${keyword}'`} 관련 포스트 총 {searchPosts.length}건.
              </Heading>
              <PostList posts={searchPosts} />
            </>
          )}
        </div>
      </AppLayout>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const posts = parseJson();

  return {
    props: {
      posts,
    },
  };
};
