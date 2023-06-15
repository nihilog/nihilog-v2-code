import React, { useState } from 'react';
import tw, { css } from 'twin.macro';
import { SerializedStyles } from '@emotion/react';

interface Props {
  children: React.ReactNode;
  styles?: SerializedStyles;
}

export function Li({ children, styles, }: Props) {
  const [ icon, setIcon, ] = useState('eva:arrow-right-fill');
  // setIcon('eva:arrow-right-outline');

  const style = {
    default: css([
      tw`  `,
      styles,
    ]),
  };

  return (
    <>
      <div css={style.default}>{children}</div>
    </>
  );
}
