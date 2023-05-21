import React from 'react';
import tw, { css, TwStyle } from 'twin.macro';
import { SerializedStyles } from '@emotion/react';

interface Props {
  children: React.ReactNode;
  position?: ('top' | 'bottom' | 'middle');
  styles?: SerializedStyles | TwStyle;
}

export function Box({ children, position, styles, }: Props) {
  const style = {
    default: css([
      tw` p-3 shadow-md shadow-black-base/50 rounded-2 bg-white border border-black-base/10 text-mb-normal `,
      tw` mb-sm:( text-mb-sm ) `,
      tw` mb-md:( text-mb-md ) `,
      position === 'top' && tw` mt-0 mb-10 `,
      position === 'bottom' && tw` mb-0 mt-10 `,
      position === 'middle' && tw` my-10 `,
      styles,
    ]),
  };

  return (
    <>
      <div css={style.default}>{children}</div>
    </>
  );
}
