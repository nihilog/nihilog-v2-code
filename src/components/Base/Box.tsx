import React from 'react';
import tw, { css } from 'twin.macro';
import { SerializedStyles } from '@emotion/react';

interface Props {
  children: React.ReactNode;
  styles?: SerializedStyles;
}

export function Box({ children, styles, }: Props) {
  const style = {
    default: css([
      tw` p-3 shadow-md shadow-black-base/50 rounded-2 bg-white border border-black-base/10 text-mb-normal `,
      tw` mb-sm:( text-mb-sm ) `,
      tw` mb-md:( text-mb-md ) `,
      styles,
    ]),
  };

  return (
    <>
      <div css={style.default}>{children}</div>
    </>
  );
}
