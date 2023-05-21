import React, { useMemo } from 'react';
import tw, { css } from 'twin.macro';
import { SerializedStyles } from '@emotion/react';
import { getContrast } from '@/utils/getcontrast';

interface Props {
  name: string;
  number: number;
  color?: string;
  styles?: SerializedStyles;
}

export function DonutChart({
  name, number, color = '#333333', styles,
}: Props) {
  const computedPercent = useMemo(() => Math.floor(number * 100), [ number, ]);
  const computedContrast = useMemo(() => getContrast(color), [ color, ]);

  const style = {
    default: css([
      tw` border border-black-base/30 rounded-2 p-2 flex flex-col gap-3 `,
      styles,
    ]),
    outerCircle: css([
      {
        background: `conic-gradient(${color} 0% ${computedPercent}%, #dddddd ${computedPercent}% 100%)`,
      },
      tw` relative aspect-square rounded-[50%] `,
    ]),
    innerCircle: css([
      tw` bg-white absolute top-1/2 left-1/2 w-1/2 aspect-square flex justify-center items-center translate-x-[-50%] translate-y-[-50%] rounded-[50%] `,
    ]),
    name: css([
      {
        backgroundColor: color,
        color: computedContrast,
      },
      tw` p-2 rounded-2 text-center `,
    ]),
  };

  return (
    <>
      <figure css={style.default}>
        <div css={style.outerCircle}>
          <span css={style.innerCircle}>{computedPercent}%</span>
        </div>
        <figcaption css={style.name}>{name}</figcaption>
      </figure>
    </>
  );
}
