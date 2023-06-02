import React, { useEffect, useMemo, useState } from 'react';
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
      tw`  `,
      styles,
    ]),
    name: css([]),
    count: css([]),
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
