import React, { useEffect, useState } from 'react';
import tw, { css } from 'twin.macro';
import { SerializedStyles } from '@emotion/react';
import { useRouter } from 'next/router';
import { PageLink } from '../Base';

interface Props {
  href: string;
  label: number;
  styles?: SerializedStyles;
}

export function PaginationLink({ href, label, styles, }: Props) {
  const [ isCurrent, setIsCurrent, ] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setIsCurrent(router.asPath === href);
  }, [ router, href, ]);

  const style = {
    default: css([
      isCurrent && tw` bg-blue-500 text-white `,
      styles,
    ]),
  };

  return (
    <>
      <PageLink href={href} styles={style.default} mode='pagination'>{label}</PageLink>
    </>
  );
}
