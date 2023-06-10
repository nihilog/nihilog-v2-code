import React from 'react';
import tw, { css } from 'twin.macro';
import { SerializedStyles } from '@emotion/react';
import { IItemData } from '@/types/mdx.types';
import { ItemBlock } from './ItemBlock';

interface Props {
  data: IItemData[];
  type: ('tag' | 'category' | 'archive');
  styles?: SerializedStyles;
}

export function ItemList({
  data, type, styles,
}: Props) {
  const style = {
    default: css([
      tw` grid grid-cols-2 gap-1 `,
      tw` mb-sm:( grid-cols-3 ) `,
      styles,
    ]),
  };

  return (
    <>
      <div css={style.default}>
        {data.map((item) => (
          <ItemBlock key={item.data} data={item} type={type} />
        ))}
      </div>
    </>
  );
}
