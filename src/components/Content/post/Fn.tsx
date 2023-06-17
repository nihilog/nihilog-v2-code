import React, { useEffect, useRef, useState } from 'react';
import tw, { css } from 'twin.macro';
import { SerializedStyles } from '@emotion/react';
import Link from 'next/link';
import { textStyle } from '@/styles';

interface Props {
  styles?: SerializedStyles;
}

export function Fn({ styles, }: Props) {
  const [ number, setNumber, ] = useState(0);

  const fnRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    const fnList = document.querySelectorAll('a.fn');

    let n = [ ...fnList, ].indexOf(fnRef.current) + 1;
    setNumber(n);
  }, [ fnRef, ]);

  const style = {
    default: css([
      textStyle.textSize,
      styles,
    ]),
    sup: css([
      tw` text-[80%] text-blue-500 `,
      tw` hover:( text-blue-600 underline ) `,
    ]),
  };

  return (
    <>
      <Link href={`#fb${number}`} id={`fn${number}`} className='fn' css={style.default} ref={fnRef}>
        <sup css={style.sup}>{`[${number}]`}</sup>
      </Link>
    </>
  );
}
