import React from 'react';
import tw, { css, TwStyle } from 'twin.macro';
import { SerializedStyles } from '@emotion/react';

interface Props {
  children: React.ReactNode;
  styles?: SerializedStyles | TwStyle;
}

export function Text({ children, styles, }: Props) {
  const style = {
    default: css([
      tw` my-8 nth-1:mt-0 nth-last-1:mb-0 text-black-base
      text-mb-normal mb-sm:text-mb-sm mb-md:text-mb-md leading-[1.5] `,
      styles,
    ]),
  };

  return (
    <>
      <p css={style.default}>{children}</p>
    </>
  );
}
