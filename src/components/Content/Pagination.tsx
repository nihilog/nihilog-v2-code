import React, { useMemo } from 'react';
import tw, { css } from 'twin.macro';
import { SerializedStyles } from '@emotion/react';
import Link from 'next/link';
import { Icon } from '@iconify/react';
import { PaginationLink } from './PaginationLink';
import { textStyle } from '@/styles';

interface Props {
  currentPage: number;
  totalPage: number;
  styles?: SerializedStyles;
}

export function Pagination({ currentPage, totalPage: lastPage, styles, }: Props) {
  const firstPage = 1;
  const buttonsPerPage = 5;

  const isFirst = currentPage === firstPage;
  const isLast = currentPage === lastPage;

  const pageNumbers = useMemo(() => {
    const startPage = Math.floor((currentPage - 1) / buttonsPerPage) * buttonsPerPage + 1;
    const endPage = Math.min(startPage + buttonsPerPage - 1, lastPage);

    const buttons = [];
    for (let i = startPage; i <= endPage; i++) {
      buttons.push(i);
    }

    return buttons;
  }, [ currentPage, ]);

  const style = {
    default: css([
      textStyle.textSize,
      tw` mt-10 flex flex-row gap-2 items-stretch justify-center `,
      styles,
    ]),
    span: css([
      tw` p-2 flex justify-center items-center rounded-2 bg-black-100 border border-black-200/20 `,
    ]),
    link: css([
      tw` p-2 bg-blue-100 border border-blue-500/20 flex justify-center items-center rounded-2 `,
      tw` hover:( bg-blue-500 text-white ) `,
    ]),
    numbers: css([
      tw` flex flex-row gap-2 items-center `,
    ]),
  };

  return (
    <>
      <div css={style.default}>
        {isFirst ? (
          <>
            <span aria-label='first' css={style.span}>
              <Icon icon='material-symbols:keyboard-double-arrow-left' />
            </span>
            <span aria-label='prev' css={style.span}>
              <Icon icon='material-symbols:chevron-left' />
            </span>
          </>
        ) : (
          <>
            <Link href='/posts/page/1' aria-label='first' css={style.link}>
              <Icon icon='material-symbols:keyboard-double-arrow-left' />
            </Link>
            <Link href={`/posts/page/${+currentPage - 1}`} aria-label='prev' css={style.link}>
              <Icon icon='material-symbols:chevron-left' />
            </Link>
          </>
        )}
        <div css={style.numbers}>
          {pageNumbers.map((number) => (
            <PaginationLink key={number} href={`/posts/page/${number}`} label={number} />
          ))}
        </div>
        {isLast ? (
          <>
            <span aria-label='next' css={style.span}>
              <Icon icon='material-symbols:chevron-right' />
            </span>
            <span aria-label='last' css={style.span}>
              <Icon icon='material-symbols:keyboard-double-arrow-right' />
            </span>
          </>
        ) : (
          <>
            <Link href={`/posts/page/${+currentPage + 1}`} aria-label='next' css={style.link}>
              <Icon icon='material-symbols:chevron-right' />
            </Link>
            <Link href={`/posts/page/${+lastPage}`} aria-label='last' css={style.link}>
              <Icon icon='material-symbols:keyboard-double-arrow-right' />
            </Link>
          </>
        )}
      </div>
    </>
  );
}
