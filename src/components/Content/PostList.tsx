import React from 'react';
import tw, { css } from 'twin.macro';
import { SerializedStyles } from '@emotion/react';
import { IMDXList } from '@/types/mdx.types';
import { PostItem } from './PostItem';

interface Props {
  posts: IMDXList[];
  styles?: SerializedStyles;
}

export function PostList({ posts, styles, }: Props) {
  const style = {
    default: css([
      tw` flex flex-col gap-5 `,
      styles,
    ]),
  };

  return (
    <>
      <div css={style.default}>
        {posts.map((post) => (
          <PostItem key={post.frontMatter.id} post={post} />
        ))}
      </div>
    </>
  );
}
