import React, { useEffect, useRef, useState } from 'react';
import tw, { css } from 'twin.macro';
import { SerializedStyles } from '@emotion/react';

interface Props {
  children: React.ReactNode;
  styles?: SerializedStyles;
}

export function Ol({ children, styles, }: Props) {
  const [ indent, setIndent, ] = useState(0);

  const olRef = useRef<HTMLOListElement>(null);

  useEffect(() => {
    if (olRef.current.parentNode.nodeName === 'LI') {
      setIndent(20);
    } else {
      setIndent(0);
    }
  }, [ olRef, ]);

  const style = {
    default: css([
      olRef.current?.parentNode.nodeName !== 'LI' && tw` mb-5 p-3 bg-black-100/50 rounded-2 border border-black-base/20 `,
      olRef.current?.parentNode.nodeName === 'LI' && tw` mb-0 `,
      (css`
        counter-reset: item;
        margin-left: ${indent}px;

        & li {
          display: block;
          margin-top: 4px;

          &:before {
            content: counters(item, ".") ". ";
            counter-increment: item;
            font-weight: 900;
            margin-right: 5px;
            color: #333333;
          }
        }
      `),
      styles,
    ]),
  };

  return (
    <>
      <ol css={style.default} ref={olRef}>{children}</ol>
    </>
  );
}
