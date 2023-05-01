import React from 'react';
import tw, { css } from 'twin.macro';
import { SerializedStyles } from '@emotion/react';

interface Props {
  styles?: SerializedStyles;
  children: React.ReactNode;
}

export function Main({ styles, children, }: Props) {
  const style = {
    default: css([
      tw` my-10 `,
      tw` mb-sm:( max-w-[900px] mx-auto ) `,
      styles,
    ]),
  };

  return (
    <>
      <main css={style.default}>{children}</main>
    </>
  );
}
