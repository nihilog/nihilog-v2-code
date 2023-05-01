import React from 'react';
import tw, { css } from 'twin.macro';
import { SerializedStyles } from '@emotion/react';
import { IMDXList } from '@/types/mdx.types';
import { Box, Heading, PageLink } from '../Base';
import { setDate } from '@/utils/date';

interface Props {
  post: IMDXList;
  styles?: SerializedStyles;
}

export function PostItem({ post, styles, }: Props) {
  // TODO: 포스트 항목 스타일 조정하기
  const cover = post.frontMatter.cover
    ? post.frontMatter.cover
    : 'https://drive.google.com/uc?export=view&id=1SD9HD4JtWQip-4P24NoYgSj__iXXw3AT';

  const style = {
    default: css([
      tw` flex flex-col gap-3 mb-sm:flex-row `,
      styles,
    ]),
    image: css([
      tw` rounded-3 hidden `,
      tw` mb-md:( block order-none w-[250px] h-[250px] ) `,
    ]),
    info: css([
      tw` order-2 flex flex-col gap-3 items-start `,
      tw` mb-sm:( order-none ) `,
    ]),
    desc: css([
      tw` text-justify text-ellipsis line-clamp-3 break-all `,
    ]),
    bottom: css([
      tw` flex flex-row w-full justify-between items-center `,
      tw`
        [a]:( px-2 py-1 rounded-2 inline-block bg-blue-100 border border-blue-500/20 )
      `,
    ]),
  };

  return (
    <>
      <Box styles={style.default}>
        <div css={style.info}>
          <Heading type='h3' link={post.fullPath} mode='title'>
            {post.frontMatter.title}
          </Heading>
          <div css={style.desc}>
            {post.frontMatter.description}
          </div>
          <div css={style.bottom}>
            <PageLink href={`/categories/${post.frontMatter.category}`}>
              {post.frontMatter.category}
            </PageLink>
            <p>{setDate(post.frontMatter.created)}</p>
          </div>
        </div>
        <img src={cover} alt={post.frontMatter.title} css={style.image} />
      </Box>
    </>
  );
}
