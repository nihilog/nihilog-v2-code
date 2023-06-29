import React from 'react';
import tw, { css } from 'twin.macro';
import { SerializedStyles } from '@emotion/react';
import Link from 'next/link';
import { Icon } from '@iconify/react';
import { IItemData } from '@/types/mdx.types';
import { textStyle } from '@/styles';

interface Props {
  data: IItemData;
  type: ('category' | 'tag' | 'archive' | 'cluster');
  styles?: SerializedStyles;
}

export function ItemBlock({ data, type, styles, }: Props) {
  const dataCategory = type === 'category'
    ? 'categories'
    : type === 'tag'
      ? 'tags'
      : type === 'archive'
        ? 'archives'
        : 'clusters';
  const dataType = type === 'category'
    ? 'category'
    : type === 'tag'
      ? 'tag'
      : type === 'archive'
        ? 'archive'
        : 'cluster';

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
      {type === 'cluster' ? (
        <Link
          href={`/${dataCategory}/[${dataType}]`}
          as={`/${dataCategory}/${data.data}`}
          css={style.default}
        >
          <span css={style.name}><Icon icon={data.icon} /> {data.data}</span>
          <span css={style.count}>{data.count}건</span>
        </Link>
      ) : (
        <Link
          href={`/${dataCategory}/[${dataType}]/page/[page]`}
          as={`/${dataCategory}/${data.data}/page/1`}
          css={style.default}
        >
          <span css={style.name}><Icon icon={data.icon} /> {data.data}</span>
          <span css={style.count}>{data.count}건</span>
        </Link>
      )}
    </>
  );
}
