import React from 'react';
import tw, { css, TwStyle } from 'twin.macro';
import { SerializedStyles } from '@emotion/react';
import Link from 'next/link';
import { textStyle } from '@/styles';

interface Props {
  children: React.ReactNode;
  href: string;
  as?: string;
  mode?: ('page' | 'button' | 'nav' | 'title' | 'pagination');
  styles?: SerializedStyles | TwStyle;
  // eslint-disable-next-line no-unused-vars
  onClick?: (event: React.MouseEvent) => void;
}

export function PageLink({
  children, href, as, mode = 'page', styles, onClick,
}: Props) {
  const style = {
    default: css([
      textStyle.textSize,
      mode === 'nav' && tw`
        bg-black-700 text-white block py-1 px-3 rounded-1 shrink-0
        hover:( bg-white text-black-base )
      `,
      mode === 'title' && tw`
        bg-black-100
      `,
      mode === 'button' && tw`
        block p-3 text-mb-normal mb-sm:text-mb-sm mb-md:text-mb-md text-center text-black-base rounded-2 bg-blue-100 border border-blue-500/20
        hover:( bg-blue-500 text-white )
      `,
      mode === 'pagination' && tw`
        block p-2 bg-blue-100 border border-blue-500/20 rounded-2
        hover:( bg-blue-500 text-white )
      `,
      styles,
    ]),
  };

  return (
    <>
      <Link href={href} as={as} css={style.default} onClick={onClick}>{children}</Link>
    </>
  );
}
