import React from 'react';
import tw, { css } from 'twin.macro';
import { SerializedStyles } from '@emotion/react';
import { Icon } from '@iconify/react';
import { PageLink } from '@/components/Base';

interface Props {
  children: React.ReactNode;
  link: string;
  external?: boolean;
  styles?: SerializedStyles;
}

export function A({
  children, link, external = false, styles,
}: Props) {
  const style = {
    default: css([
      tw` text-royal-blue-400 `,
      tw` hover:( text-royal-blue-600 underline ) `,
      tw` before:( content-[url('https://api.iconify.design/ion/link-sharp.svg?color=%23659bf5')] mr-[2px] hover:( content-[url('https://api.iconify.design/ion/link-sharp.svg?color=%232a58e5')] ) ) `,
      styles,
    ]),
    external: css([
      tw` inline-flex flex-row gap-[2px] items-center text-green-500 `,
      tw` hover:( text-green-700 underline ) `,
    ]),
  };

  return (
    <>
      {!external && (
        <PageLink href={link} mode='page' styles={style.default}>
          {children}
        </PageLink>
      )}
      {external && (
        <a href={link} target='_blank' rel='noopener noreferrer' css={style.external}>
          {children}
          <Icon icon='gg:external' />
        </a>
      )}
    </>
  );
}
