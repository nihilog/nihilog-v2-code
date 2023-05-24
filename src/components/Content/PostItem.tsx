import React, { useCallback, useState } from 'react';
import tw, { css, TwStyle } from 'twin.macro';
import { SerializedStyles } from '@emotion/react';
import Link from 'next/link';
import { IMDXList } from '@/types/mdx.types';
import { Box, Heading, PageLink } from '../Base';
import { setDate } from '@/utils/date';

interface Props {
  post: IMDXList;
  styles?: SerializedStyles | TwStyle;
}

export function PostItem({ post, styles, }: Props) {
  const [ isHover, setIsHover, ] = useState(false);

  const cover = post.frontMatter.cover
    ? post.frontMatter.cover
    : 'https://drive.google.com/uc?export=view&id=1SD9HD4JtWQip-4P24NoYgSj__iXXw3AT';

  const onMouseEnter = useCallback(() => {
    console.log('롤오버입니다.');
    setIsHover(true);
  }, []);

  const onMouseLeave = useCallback(() => {
    console.log('롤아웃입니다.');
    setIsHover(false);
  }, []);

  const style = {
    default: css([
      tw`  `,
      styles,
    ]),
    title: css([
      tw` absolute z-[2] bg-blue-400 text-white p-2 text-center block `,
      isHover
        ? tw` bottom-[0%] `
        : tw` top-[100%] `,
    ]),
  };

  return (
    <div css={style.default} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
      <Link href='/posts/[id]' as={post.fullPath}>
        <img src={cover} alt={post.frontMatter.title} />
        <div css={style.title}>
          {isHover ? 'hover' : 'non-hover'}
        </div>
      </Link>
    </div>
  );
}
