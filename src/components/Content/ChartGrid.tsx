import React from 'react';
import tw, { css } from 'twin.macro';
import { SerializedStyles } from '@emotion/react';
import { Heading } from '../Base';

interface Props {
  title: string;
  children: React.ReactNode;
  styles?: SerializedStyles;
}

export function ChartGrid({ title, children, styles, }: Props) {
  const style = {
    default: css([
      tw` my-8 nth-1:mt-0 nth-last-1:mb-0 `,
      styles,
    ]),
    chartGrid: css([
      tw` grid grid-cols-2 gap-2 mb-md:grid-cols-3 `,
    ]),
  };

  return (
    <>
      <div css={style.default}>
        <Heading type='h2' mode='normal' styles={tw`mb-5`}>{title}</Heading>
        <div css={style.chartGrid}>{children}</div>
      </div>
    </>
  );
}
