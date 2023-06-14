import React from 'react';
import tw, { css } from 'twin.macro';
import { SerializedStyles } from '@emotion/react';
import { textStyle } from '@/styles';

interface Props {
  fileName: string;
  styles?: SerializedStyles;
}

export function PreTitle({ fileName, styles, }: Props) {
  const style = {
    default: css([
      textStyle.textSize,
      tw` p-3 py-2 bg-blue-500 rounded-t-1 `,
      styles,
    ]),
  };

  return (
    <>
      <div css={style.default}>{fileName}</div>
    </>
  );
}
