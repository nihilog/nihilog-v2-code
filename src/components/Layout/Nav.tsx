import React from 'react';
import tw, { css, TwStyle } from 'twin.macro';
import { SerializedStyles } from '@emotion/react';
import { PageLink } from '../Base';

interface Props {
  styles?: SerializedStyles | TwStyle;
}

export function Nav({ styles, }: Props) {
  const style = {
    default: css([
      tw` flex flex-row gap-2 flex-nowrap justify-start overflow-x-scroll pb-2 `,
      tw` [::-webkit-scrollbar]:( bg-black-500 h-1 rounded-2 ) `,
      tw` [::-webkit-scrollbar-thumb]:( bg-white/30 rounded-2 ) `,
      styles,
    ]),
  };

  return (
    <>
      <nav css={style.default}>
        <PageLink href='/' mode='nav'>홈</PageLink>
        <PageLink href='/info' mode='nav'>소개</PageLink>
        <PageLink href='/posts/page/1' mode='nav'>포스트 목록</PageLink>
        <PageLink href='/categories' mode='nav'>카테고리</PageLink>
        <PageLink href='/tags' mode='nav'>태그 클라우드</PageLink>
        <PageLink href='/archives' mode='nav'>아카이브</PageLink>
      </nav>
    </>
  );
}
