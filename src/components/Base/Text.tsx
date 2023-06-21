import React from 'react';
import tw, { css, TwStyle } from 'twin.macro';
import { SerializedStyles } from '@emotion/react';
import { textStyle } from '@/styles';

interface Props {
  children: React.ReactNode;
  last?: boolean;
  styles?: SerializedStyles | TwStyle;
}

export function Text({ children, last = false, styles, }: Props) {
  const style = {
    default: css([
      tw` mb-5 text-black-base leading-[1.5] text-justify break-all `,
      last ?? tw` mb-0 `,
      textStyle.textSize,
      styles,
    ]),
  };

  return (
    <>
      <p css={style.default}>{children}</p>
    </>
  );
}
