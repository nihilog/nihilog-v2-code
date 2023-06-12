import React from 'react';
import tw, { css } from 'twin.macro';
import { SerializedStyles } from '@emotion/react';

interface Props {
  children: React.ReactNode;
  styles?: SerializedStyles;
}

export function Strike({ children, styles, }: Props) {
  const style = {
    default: css([
      tw` line-through `,
      styles,
    ]),
  };

  return (
    <>
      <span css={style.default}>{children}</span>
    </>
  );
}
