import React, { useEffect, useRef, useState } from 'react';
import tw, { css } from 'twin.macro';
import { SerializedStyles } from '@emotion/react';

interface Props {
  children: React.ReactNode;
  className: string;
  styles?: SerializedStyles;
}

export function Ul({ children, className, styles, }: Props) {
  const [ indent, setIndent, ] = useState(0);

  const ulRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    if (ulRef.current.parentNode.nodeName === 'LI') {
      setIndent(20);
    } else {
      setIndent(0);
    }
  }, [ ulRef, ]);

  const style = {
    default: css([
      tw` mb-5 `,
      css(css`
        margin-left: ${indent}px;
      `),
      styles,
    ]),
  };

  return (
    <>
      <ul className={className} css={style.default} ref={ulRef}>{children}</ul>
    </>
  );
}
