import React, { useEffect, useMemo, useState } from 'react';
import tw, { css } from 'twin.macro';
import { SerializedStyles } from '@emotion/react';
import Link from 'next/link';
import { ICategory, ITag } from '@/types/mdx.types';
import { textStyle } from '@/styles';

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

  const dataName = useMemo(() => {
    return type === 'category' ? categoryData?.category : tagData?.tag;
  }, [ type, categoryData, tagData, ]);

  const dataCount = useMemo(() => {
    return type === 'category' ? categoryData?.count : tagData?.count;
  }, [ type, categoryData, tagData, ]);

  const dataCategory = type === 'category' ? 'categories' : 'tags';
  const dataType = type === 'category' ? 'category' : 'tag';

  const style = {
    default: css([
      textStyle.textSize,
      tw` inline-flex flex-row gap-2 p-2 bg-black-600 rounded-2 hover:( bg-black-base ) `,
      styles,
    ]),
    name: css([
      tw` text-white `,
    ]),
    count: css([
      tw` inline-block bg-white text-black-base rounded-1 px-1 `,
    ]),
  };

  return (
    <>
      <Link
        href={`/${dataCategory}/[${dataType}]/page/[page]`}
        as={`/${dataCategory}/${dataName}/page/1`}
        css={style.default}
      >
        <span css={style.name}>{dataName}</span>
        <span css={style.count}>{dataCount}</span>
      </Link>
    </>
  );
}
