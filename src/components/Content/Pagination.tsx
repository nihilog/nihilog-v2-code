import React, { useCallback, useMemo } from 'react';
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
  type?: ('post' | 'category' | 'tag');
  keyword?: string;
}

export function Pagination({
  currentPage, totalPage: lastPage, styles, type = 'post', keyword,
}: Props) {
  const firstPage = 1;
  const buttonsPerPage = 5;

  const isFirst = currentPage === firstPage;
  const isLast = currentPage === lastPage;

  const pageNumbers: number[] = useMemo(() => {
    const startPage = Math.floor((currentPage - 1) / buttonsPerPage) * buttonsPerPage + 1;
    const endPage = Math.min(startPage + buttonsPerPage - 1, lastPage);

    const buttons = [];
    for (let i = startPage; i <= endPage; i++) {
      buttons.push(i);
    }

    return buttons;
  }, [ currentPage, ]);

  const prevLink = useMemo(() => {
    switch (type) {
      case 'post':
        return `/posts/page/${+currentPage - 1}`;
      case 'category':
        return `/category/${keyword}/page/${+currentPage - 1}`;
      case 'tag':
        return `/tag/${keyword}/page/${+currentPage - 1}`;
      default:
        return;
    }
  }, []);

  const numberLink = useCallback((number: number, keyword = '') => {
    switch (type) {
      case 'post':
        return `/posts/page/${number}`;
      case 'category':
        return `/category/${keyword}/page/${number}`;
      case 'tag':
        return `/tag/${keyword}/page/${number}`;
      default:
        return;
    }
  }, []);

  const nextLink = useMemo(() => {
    switch (type) {
      case 'post':
        return `/posts/page/${+currentPage + 1}`;
      case 'category':
        return `/category/${keyword}/page/${+currentPage + 1}`;
      case 'tag':
        return `/tag/${keyword}/page/${+currentPage + 1}`;
      default:
        return;
    }
  }, []);

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
            <Link href={prevLink} aria-label='prev' css={style.link}>
              <Icon icon='material-symbols:chevron-left' />
            </Link>
          </>
        )}
        <div css={style.numbers}>
          {pageNumbers.map((number) => (
            <PaginationLink key={number} href={numberLink(number, keyword)} label={number} />
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
            <Link href={nextLink} aria-label='next' css={style.link}>
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
