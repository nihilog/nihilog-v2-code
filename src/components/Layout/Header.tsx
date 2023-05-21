import React from 'react';
import tw, { css, TwStyle } from 'twin.macro';
import { SerializedStyles } from '@emotion/react';
import { Nav } from './Nav';

interface Props {
  styles?: SerializedStyles | TwStyle;
}

export function Header({ styles, }: Props) {
  const style = {
    default: css([
      tw` bg-black-base rounded-2 p-4 `,
      styles,
    ]),
    image: css([
      tw` mb-5 `,
      tw`
        border-b-[3px] border-white pb-5
        [img]:( w-[200px] mx-auto block )
      `,
    ]),
  };

  return (
    <>
      <header css={style.default}>
        <h1 css={style.image}>
          <img src='/images/nihilog-front-logo.svg' alt='니힐로그 로고' />
        </h1>
        <Nav />
      </header>
    </>
  );
}
