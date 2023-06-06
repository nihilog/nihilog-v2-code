import React, { useEffect, useMemo, useState } from 'react';
import tw, { css } from 'twin.macro';
import { SerializedStyles } from '@emotion/react';
import Link from 'next/link';
import { Icon } from '@iconify/react';
import { IArchive, ICategory, ITag } from '@/types/mdx.types';
import { textStyle } from '@/styles';

interface Props {
  data: (ICategory | ITag | IArchive);
  type: ('category' | 'tag' | 'archive');
  styles?: SerializedStyles;
}

export function ItemBlock({ data, type, styles, }: Props) {
  const [ categoryData, setCategoryData, ] = useState<ICategory>(null);
  const [ tagData, setTagData, ] = useState<ITag>(null);
  const [ archiveData, setArcHiveData, ] = useState<IArchive>(null);

  useEffect(() => {
    if (type === 'category') {
      setCategoryData(data as ICategory);
    } else if (type === 'tag') {
      setTagData(data as ITag);
    } else if (type === 'archive') {
      setArcHiveData(data as IArchive);
    }
  }, [ type, data, ]);

  const dataName = useMemo(() => {
    if (type === 'category') {
      return categoryData?.category;
    } else if (type === 'tag') {
      return tagData?.tag;
    } else if (type === 'archive') {
      return archiveData?.archive;
    }
  }, [ type, categoryData, tagData, archiveData, ]);

  const dataCount = useMemo(() => {
    if (type === 'category') {
      return categoryData?.count;
    } else if (type === 'tag') {
      return tagData?.count;
    } else if (type === 'archive') {
      return archiveData?.count;
    }
  }, [ type, categoryData, tagData, archiveData, ]);

  const dataIcon = useMemo(() => {
    if (type === 'category') {
      return categoryData?.icon;
    } else if (type === 'tag') {
      return tagData?.icon;
    } else if (type === 'archive') {
      return archiveData?.icon;
    }
  }, [ type, categoryData, tagData, archiveData, ]);

  const dataCategory = type === 'category'
    ? 'categories'
    : type === 'tag'
      ? 'tags'
      : 'archives';
  const dataType = type === 'category'
    ? 'category'
    : type === 'tag'
      ? 'tag'
      : 'archive';

  const style = {
    default: css([
      textStyle.textSize,
      tw` inline-flex flex-row gap-2 p-2 bg-black-600 rounded-2 `,
      tw` hover:( bg-black-base shadow-md shadow-black-700 ) `,
      styles,
    ]),
    name: css([
      tw` flex flex-row items-center gap-1 text-white flex-1 shrink-0 text-justify break-all `,
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
        <span css={style.name}><Icon icon={dataIcon} /> {dataName}</span>
        <span css={style.count}>{dataCount}</span>
      </Link>
    </>
  );
}
