import React from 'react';
import tw, { css, TwStyle } from 'twin.macro';
import { SerializedStyles } from '@emotion/react';

interface Props {
  children: React.ReactNode;
  type?: ('h1' | 'h2' | 'h3' | 'h4' | 'h5');
  mode?: ('normal' | 'sub-title' | 'title');
  styles?: SerializedStyles | TwStyle;
}

export function Heading({
  children, type: Role = 'h1', mode = 'normal', styles,
}: Props) {
  const style = {
    default: css([
      tw` leading-[1.2] `,
      Role === 'h1' && tw`text-h1`,
      Role === 'h2' && tw`text-h2`,
      Role === 'h3' && tw`text-h3`,
      Role === 'h4' && tw`text-h4`,
      Role === 'h5' && tw`text-h5`,
      tw` font-900 text-black-base flex text-justify break-all `,
      mode === 'sub-title' && tw`
        mb-10 py-3 px-2 border-l-[20px] border-black-base
      `,
      mode === 'title' && tw`
        text-ellipsis line-clamp-1 break-all text-black-500 hover:text-black-800 mb-2
      `,
      styles,
    ]),
    fontSize: css([
      tw`
        text-[70%]
        mb-sm:( text-[80%] )
        mb-md:( text-[100%] )
      `,
    ]),
  };

  return (
    <>
      <Role css={style.default}>
        <span css={style.fontSize}>{children}</span>
      </Role>
    </>
  );
}
