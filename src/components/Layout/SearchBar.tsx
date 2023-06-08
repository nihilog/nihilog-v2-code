import React from 'react';
import tw, { css } from 'twin.macro';
import { SerializedStyles } from '@emotion/react';

interface Props {
  styles?: SerializedStyles;
}

export function SearchBar({ styles, }: Props) {
  const style = {
    default: css([
      tw`  `,
      styles,
    ]),
    form: css([
      tw`  `,
    ]),
  };

  return (
    <>
      <div css={style.default}>
        <form css={style.form}>
          <input type='text' />
          <button>
            <span>검색</span>
            검색아이콘
          </button>
        </form>
      </div>
    </>
  );
}
