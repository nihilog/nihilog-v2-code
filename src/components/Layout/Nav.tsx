import React from 'react';
import tw, { css } from 'twin.macro';
import { SerializedStyles } from '@emotion/react';
import { PageLink } from '../Base';

interface Props {
  styles?: SerializedStyles;
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
      </nav>
    </>
  );
}
