import React from 'react';
import tw, { css } from 'twin.macro';
import { SerializedStyles } from '@emotion/react';
import { textStyle } from '@/styles';

interface Props {
  name: string;
  children: React.ReactNode;
  styles?: SerializedStyles;
}

export function PostInfoBlock({ name, children, styles, }: Props) {
  const style = {
    default: css([
      textStyle.textSize,
      tw` flex flex-row gap-2 mb-2 nth-last-1:( mb-0 ) items-center flex-wrap `,
      styles,
    ]),
    name: css([
      tw` w-[90px] text-center block p-1 bg-black-700 rounded-1 text-white shrink-0 text-[80%] `,
    ]),
  };

  return (
    <>
      <div css={style.default}>
        <span css={style.name}>{name}</span>
        {children}
      </div>
    </>
  );
}
