import React, { useEffect, useState } from 'react';
import tw, { css } from 'twin.macro';
import { SerializedStyles } from '@emotion/react';
import { IArchive, ICategory, ITag } from '@/types/mdx.types';
import { ItemBlock } from './ItemBlock';

interface Props {
  data: (ICategory[] | ITag[] | IArchive[]);
  type: ('category' | 'tag' | 'archive');
  styles?: SerializedStyles;
}

export function ItemList({
  data, type, styles,
}: Props) {
  const [ categoryData, setCategoryData, ] = useState<ICategory[]>(null);
  const [ tagData, setTagData, ] = useState<ITag[]>(null);
  const [ archiveData, setArcHiveData, ] = useState<IArchive[]>(null);

  useEffect(() => {
    if (type === 'category') {
      setCategoryData(data as ICategory[]);
    } else if (type === 'tag') {
      setTagData(data as ITag[]);
    } else if (type === 'archive') {
      setArcHiveData(data as IArchive[]);
    }
  }, [ type, data, ]);

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
        {type === 'category' && (
          categoryData?.map((item) => (
            <ItemBlock key={item.category} data={item} type='category' />
          ))
        )}
        {type === 'tag' && (
          tagData?.map((item) => (
            <ItemBlock key={item.tag} data={item} type='tag' />
          ))
        )}
        {type === 'archive' && (
          archiveData?.map((item) => (
            <ItemBlock key={item.archive} data={item} type='archive' />
          ))
        )}
      </div>
    </>
  );
}
