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
      tw` flex flex-row gap-2 `,
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
      </nav>
    </>
  );
}
