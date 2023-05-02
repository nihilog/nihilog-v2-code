import React from 'react';
import tw, { css } from 'twin.macro';
import { SerializedStyles } from '@emotion/react';
import Link from 'next/link';

interface Props {
  children: React.ReactNode;
  type?: ('h1' | 'h2' | 'h3' | 'h4' | 'h5');
  mode?: ('normal' | 'sub-title' | 'title');
  link?: string;
  styles?: SerializedStyles;
}

export function Heading({
  children, type: Role = 'h1', mode = 'normal', link, styles,
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
        mb-5 py-3 px-2 border-l-[20px] border-black-base
      `,
      mode === 'title' && tw`
        w-full
        [a]:(
          p-3 block bg-black-100 border border-black-base/10 flex-[1] text-black-base/80
          hover:( bg-black-base text-white )
        )
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
      {link ? (
        <Role css={style.default}>
          <Link href={link} css={style.fontSize}>{children}</Link>
        </Role>
      ) : (
        <Role css={style.default}>
          <span css={style.fontSize}>{children}</span>
        </Role>
      )}
    </>
  );
}
