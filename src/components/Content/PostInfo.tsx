import React from 'react';
import tw, { css } from 'twin.macro';
import { SerializedStyles } from '@emotion/react';
import Link from 'next/link';
import { v4 as uuid } from 'uuid';
import { IMDX } from '@/types/mdx.types';
import { Heading } from '../Base';
import { setDate } from '@/utils/date';

interface Props {
  post: IMDX;
  styles?: SerializedStyles;
}

export function PostInfo({ post, styles, }: Props) {
  const style = {
    default: css([
      tw`  `,
      styles,
    ]),
  };

  return (
    <>
      <div css={style.default}>
        <Heading type='h1' mode='post-title'>{post.frontMatter.title}</Heading>
        <div>
          <span>카테고리</span>
          <Link
            href='/categories/[category]/page/[page]'
            as={`/categories/${post.frontMatter.category}/page/1`}
          >
            {post.frontMatter.category}
          </Link>
        </div>
        <div>
          <span>태그</span>
          {post.frontMatter.tags.map((tag) => (
            <Link
              key={uuid()}
              href='/tags/[tag]/page/[page]'
              as={`/tags/${tag}/page/1`}
            >
              {tag}
            </Link>
          ))}
        </div>
        <div>
          <span>작성일자</span>
          <span>{setDate(post.frontMatter.created as number)}</span>
        </div>
        <div>
          <span>수정일자</span>
          <span>{setDate(post.frontMatter.updated as number)}</span>
        </div>
      </div>
    </>
  );
}
