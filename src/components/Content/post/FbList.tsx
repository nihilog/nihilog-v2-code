import React from 'react';
import tw, { css } from 'twin.macro';
import { SerializedStyles } from '@emotion/react';

interface Props {
  children: React.ReactNode;
  styles?: SerializedStyles;
}

export function FbList({ children, styles, }: Props) {
  const style = {
    default: css([
      tw` pt-10 mt-10 border-t-2 border-black-base/30 border-dashed `,
      styles,
    ]),
  };

  return (
    <>
      <div css={style.default}>{children}</div>
    </>
  );
}
