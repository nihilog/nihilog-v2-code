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
      tw` w-[200px] mx-auto block mb-5 `,
    ]),
  };

  return (
    <>
      <header css={style.default}>
        <img src='/images/nihilog-front-logo.svg' alt='니힐로그 로고' css={style.image} />
        <Nav />
      </header>
    </>
  );
}
