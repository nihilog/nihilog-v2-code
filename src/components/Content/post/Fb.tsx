import React, { useEffect, useRef, useState } from 'react';
import tw, { css } from 'twin.macro';
import { SerializedStyles } from '@emotion/react';
import Link from 'next/link';

interface Props {
  children: React.ReactNode;
  styles?: SerializedStyles;
}

export function Fb({ children, styles, }: Props) {
  const [ number, setNumber, ] = useState(0);
  const fbRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    const fbList = [ ...document.querySelectorAll('a.fb'), ];

    setNumber(fbList.indexOf(fbRef.current) + 1);
  }, [ fbRef, ]);

  const style = {
    default: css([
      tw` flex flex-row gap-2 `,
      styles,
    ]),
    link: css([
      tw` text-blue-500 `,
      tw` hover:( text-blue-600 underline ) `,
    ]),
  };

  return (
    <>
      <p css={style.default}>
        <Link href={`#fn${number}`} id={`fb${number}`} className='fb' ref={fbRef} css={style.link}>
          [{number}]
        </Link>
        <span className='fb-content'>{children}</span>
      </p>
    </>
  );
}
