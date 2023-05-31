import React, { useEffect, useState } from 'react';
import tw, { css } from 'twin.macro';
import { SerializedStyles } from '@emotion/react';
import { ICategory, ITag } from '@/types/mdx.types';
import { ItemBlock } from './ItemBlock';

interface Props {
  data: (ICategory[] | ITag[]);
  type: ('category' | 'tag');
  styles?: SerializedStyles;
}

export function ItemList({
  data, type, styles,
}: Props) {
  const [ categoryData, setCategoryData, ] = useState<ICategory[]>(null);
  const [ tagData, setTagData, ] = useState<ITag[]>(null);

  useEffect(() => {
    if (type === 'category') {
      setCategoryData(data as ICategory[]);
    } else if (type === 'tag') {
      setTagData(data as ITag[]);
    }
  }, [ type, data, ]);

  const style = {
    default: css([
      tw`  `,
      styles,
    ]),
  };

  return (
    <>
      <div css={style.default}>
        {type === 'category' ? (
          categoryData?.map((item) => (
            <ItemBlock key={item.category} data={item} type='category' />
          ))
        ) : (
          tagData?.map((item) => (
            <ItemBlock key={item.tag} data={item} type='tag' />
          ))
        )}
      </div>
    </>
  );
}
