import React from 'react';
import tw, { css } from 'twin.macro';
import { SerializedStyles } from '@emotion/react';

interface Props {
  children: React.ReactNode;
  styles?: SerializedStyles;
}

export function Em({ children, styles, }: Props) {
  const style = {
    default: css([
      tw` mr-1 `,
      styles,
    ]),
  };

  return (
    <>
      <em css={style.default}>{children}</em>
    </>
  );
}
