import React from 'react';
import tw, { css } from 'twin.macro';
import { SerializedStyles } from '@emotion/react';

interface Props {
  children: React.ReactNode;
  styles?: SerializedStyles;
}

export function Bold({ children, styles, }: Props) {
  const style = {
    default: css([
      tw` font-900 `,
      styles,
    ]),
  };

  return (
    <>
      <strong css={style.default}>{children}</strong>
    </>
  );
}
