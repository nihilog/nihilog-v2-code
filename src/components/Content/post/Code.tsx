import React, { useEffect, useRef, useState } from 'react';
import tw, { css } from 'twin.macro';
import { SerializedStyles } from '@emotion/react';

interface Props {
  children: React.ReactNode;
  styles?: SerializedStyles;
}

export function Code({ children, styles, }: Props) {
  const [ isCode, setIsCode, ] = useState(false);
  const codeRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (codeRef.current.parentNode.nodeName !== 'PRE') {
      setIsCode(true);
    }
  }, [ codeRef, ]);

  const style = {
    default: css([
      isCode && tw` font-code inline-block px-2 bg-blue-100 border-blue-500/20 text-blue-600 rounded-1 border `,
      styles,
    ]),
  };

  return (
    <>
      <code css={style.default} ref={codeRef}>{children}</code>
    </>
  );
}
