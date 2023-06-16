import React, { useCallback, useEffect, useState } from 'react';
import tw, { css } from 'twin.macro';
import { SerializedStyles } from '@emotion/react';
import { Icon } from '@iconify/react';
import { textStyle } from '@/styles';

interface Props {
  src: string;
  alt?: string;
  styles?: SerializedStyles;
}

export function Img({ src, alt, styles, }: Props) {
  const [ isClick, setIsClick, ] = useState(false);

  const onScroll = (event: Event) => {
    if (isClick) {
      event.preventDefault();
    }
  };

  useEffect(() => {
    window.addEventListener('wheel', onScroll, { passive: false, });

    return () => {
      window.removeEventListener('wheel', onScroll);
    };
  }, [ isClick, ]);

  const onClickImage = useCallback(() => {
    setIsClick(true);
  }, []);

  const onClickClose = useCallback(() => {
    setIsClick(false);
  }, []);

  const style = {
    default: css([
      textStyle.textSize,
      tw` mb-5 p-5 border border-black-base/30 rounded-1 text-center bg-black-100 text-black-base `,
      styles,
    ]),
    img: css([
      tw` mb-5 rounded-2 border border-black-base/50 cursor-pointer `,
    ]),
    caption: css([
      tw` italic text-[90%] `,
      tw` before:( content-[url('https://api.iconify.design/material-symbols/image-outline.svg?color=%23333')] ) `,
    ]),
    zoomImage: css([
      tw` w-[100vw] h-[100vh] z-10 bg-black-base/80 fixed top-0 left-0 flex flex-col shrink-0 `,
      tw` [.modal-top]:(
        w-full h-[50px]
        [.close-button]:( ml-auto text-white cursor-pointer )
      ) `,
      tw` [.modal-middle]:(
        flex-1 shrink-0 flex flex-row justify-center items-center w-full h-[100vh - 100px]
        [img]:( max-h-[calc(100vh - 100px)] w-auto  )
      ) `,
      tw` [.modal-bottom]:(
        w-full h-[50px] flex flex-row items-center justify-center
        [a]:(
          p-1 px-2 bg-blue-200 text-blue-600 rounded-1 border border-blue-500/20
          hover:( bg-blue-600 text-white )
        )
      ) `,
    ]),
  };

  return (
    <>
      <figure css={style.default}>
        <img src={src} alt={alt} css={style.img} onClick={onClickImage} />
        <figcaption css={style.caption}>{alt}</figcaption>
      </figure>
      {isClick && (
        <div css={style.zoomImage}>
          <div className='modal-top'>
            <Icon
              icon='humbleicons:times'
              fontSize={50}
              className='close-button'
              onClick={onClickClose}
            />
          </div>
          <div className='modal-middle'>
            <img src={src} alt={alt} />
          </div>
          <div className='modal-bottom'>
            <a href={src} target='_blank' rel='noopener noreferrer'>
              새 창에서 보기
            </a>
          </div>
        </div>
      )}
    </>
  );
}
