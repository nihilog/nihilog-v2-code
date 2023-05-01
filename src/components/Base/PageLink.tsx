import React from 'react';
import tw, { css } from 'twin.macro';
import { SerializedStyles } from '@emotion/react';
import Link from 'next/link';
import { textStyle } from '@/styles';

interface Props {
  children: React.ReactNode;
  href: string;
  mode?: ('page' | 'external' | 'button' | 'nav' | 'title');
  styles?: SerializedStyles;
}

export function PageLink({
  children, href, mode = 'page', styles,
}: Props) {
  const style = {
    default: css([
      textStyle.textSize,
      mode === 'nav' && tw`
        bg-black-700 text-white block py-1 px-3 rounded-1
        hover:( bg-white text-black-base )
      `,
      mode === 'title' && tw`
        bg-black-100
      `,
      styles,
    ]),
  };

  return (
    <>
      <Link href={href} css={style.default}>{children}</Link>
    </>
  );
}
