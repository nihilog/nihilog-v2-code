import React, { useCallback, useRef, useState } from 'react';
import tw, { css } from 'twin.macro';
import { SerializedStyles } from '@emotion/react';
import { Icon } from '@iconify/react';
import { useRouter } from 'next/router';
import { toast } from 'react-toastify';
import { textStyle } from '@/styles';

interface Props {
  styles?: SerializedStyles;
}

export function SearchBar({ styles, }: Props) {
  const router = useRouter();

  const [ keyword, setKeyword, ] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  const onChangeInput = useCallback(() => {
    setKeyword(inputRef.current.value);
  }, [ inputRef, ]);

  const onSubmitSearch = useCallback((event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!keyword) {
      toast.warn('검색어를 입력해주세요');
      return;
    }

    router.push(`/search?keyword=${keyword}`);
    setKeyword('');
  }, [ keyword, ]);

  const style = {
    default: css([
      tw` mt-3 max-w-[900px] mx-auto `,
      styles,
    ]),
    form: css([
      tw` flex flex-row `,
      textStyle.textSize,
    ]),
    input: css([
      tw` flex-[1] w-full p-2 shrink-0 rounded-l-2 bg-black-400 text-white placeholder:text-white/50 outline-none `,
    ]),
    button: css([
      tw` text-white p-2 px-3 bg-black-700 rounded-r-2 `,
      tw` hover:( bg-black-base ) `,
    ]),
  };

  return (
    <>
      <div css={style.default}>
        <form onSubmit={onSubmitSearch} css={style.form}>
          <input
            type='text'
            placeholder='검색어를 입력하세요'
            css={style.input}
            value={keyword}
            ref={inputRef}
            onChange={onChangeInput}
          />
          <button css={style.button}>
            <span css={textStyle.hidden}>검색</span>
            <Icon icon='material-symbols:search' />
          </button>
        </form>
      </div>
    </>
  );
}
