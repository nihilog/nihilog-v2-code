import React from 'react';
import tw, { css } from 'twin.macro';
import { SerializedStyles } from '@emotion/react';
import Link from 'next/link';
import { v4 as uuid } from 'uuid';
import { Icon } from '@iconify/react';
import { IMDX } from '@/types/mdx.types';
import { Box, Heading } from '../Base';
import { setDate } from '@/utils/date';
import { PostInfoBlock } from './PostInfoBlock';

interface Props {
  post: IMDX;
  styles?: SerializedStyles;
}

export function PostInfo({ post, styles, }: Props) {
  const style = {
    default: css([
      tw` mb-10 `,
      styles,
    ]),
    item: css([
      tw` flex flex-row items-center shrink-0 p-1 px-2 gap-[3px] bg-blue-100 border border-blue-500/40 rounded-1 text-blue-600 text-[80%] `,
      tw` hover:( bg-blue-600 text-white ) `,
    ]),
  };

  return (
    <>
      <Box styles={style.default}>
        <Heading type='h1' mode='post-title'>{post.frontMatter.title}</Heading>
        {post.frontMatter.cluster.length > 0 && (
          <PostInfoBlock name='시리즈'>
            <Link
              href='/clusters/[cluster]'
              as={`/clusters/${post.frontMatter.cluster[0]}`}
              css={style.item}
            >
              <Icon icon='fluent:board-24-filled' /> {post.frontMatter.cluster[0]}
            </Link>
          </PostInfoBlock>
        )}
        <PostInfoBlock name='카테고리'>
          <Link
            href='/categories/[category]/page/[page]'
            as={`/categories/${post.frontMatter.category}/page/1`}
            css={style.item}
          >
            <Icon icon='material-symbols:folder' /> {post.frontMatter.category}
          </Link>
        </PostInfoBlock>
        <PostInfoBlock name='태그'>
          {post.frontMatter.tags.map((tag) => (
            <Link
              key={uuid()}
              href='/tags/[tag]/page/[page]'
              as={`/tags/${tag}/page/1`}
              css={style.item}
            >
              <Icon icon='material-symbols:tag' /> {tag}
            </Link>
          ))}
        </PostInfoBlock>
        <PostInfoBlock name='작성일자'>
          <span>{setDate(post.frontMatter.created as number)}</span>
        </PostInfoBlock>
        <PostInfoBlock name='수정일자'>
          <span>{setDate(post.frontMatter.updated as number)}</span>
        </PostInfoBlock>
      </Box>
    </>
  );
}
