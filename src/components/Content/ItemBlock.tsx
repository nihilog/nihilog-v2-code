import React, { useEffect, useState } from 'react';
import tw, { css } from 'twin.macro';
import { SerializedStyles } from '@emotion/react';
import Link from 'next/link';
import { ICategory, ITag } from '@/types/mdx.types';

interface Props {
  data: (ICategory | ITag);
  type: ('category' | 'tag');
  styles?: SerializedStyles;
}

export function ItemBlock({ data, type, styles, }: Props) {
  const [ categoryData, setCategoryData, ] = useState<ICategory>(null);
  const [ tagData, setTagData, ] = useState<ITag>(null);

  useEffect(() => {
    if (type === 'category') {
      setCategoryData(data as ICategory);
    } else if (type === 'tag') {
      setTagData(data as ITag);
    }
  }, [ type, data, ]);

  const style = {
    default: css([
      tw`  `,
      styles,
    ]),
    name: css([]),
    count: css([]),
  };

  return (
    <>
      <Link
        href='/categories/[category]/page/[page]'
        as={`/categories/${type}/page/1`}
        css={style.default}
      >
        <span css={style.name}>{type === 'category' ? categoryData?.category : tagData?.tag}</span>
        <span css={style.count}>{type === 'category' ? categoryData?.count : tagData?.count}</span>
      </Link>
    </>
  );
}
