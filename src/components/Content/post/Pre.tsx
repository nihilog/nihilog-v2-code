import React from 'react';
import tw, { css } from 'twin.macro';
import { SerializedStyles } from '@emotion/react';

interface Props {
  children: React.ReactNode;
  className: string;
  styles?: SerializedStyles;
}

export function Pre({ children, className, styles, }: Props) {
  const style = {
    default: css([
      tw` rounded-b-1 `,
      tw` font-code p-3 py-2 [code]:( font-code [span]:( font-code ) ) `,
      styles,
    ]),
  };

  return (
    <>
      <pre css={style.default} className={className}>
        {children}
      </pre>
    </>
  );
}
