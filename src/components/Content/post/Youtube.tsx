import React from 'react';
import tw, { css } from 'twin.macro';
import { SerializedStyles } from '@emotion/react';
import { Icon } from '@iconify/react';

interface Props {
  id: string;
  desc: string;
  styles?: SerializedStyles;
}

export function Youtube({ id, desc, styles, }: Props) {
  const style = {
    default: css([
      tw` w-full mb-5 bg-red-600 p-3 rounded-2 `,
      tw` [iframe]:( w-full aspect-video rounded-2 ) `,
      styles,
    ]),
    title: css([
      tw` bg-red-600 pb-3 text-white flex flex-row gap-2 items-center `,
    ]),
  };

  return (
    <>
      <figure css={style.default}>
        <figcaption css={style.title}>
          <Icon icon='bi:youtube' fontSize={30} />
          {desc}
        </figcaption>
        <iframe src={`https://www.youtube.com/embed/${id}`} title='YouTube video player' frameBorder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share' allowFullScreen />
      </figure>
    </>
  );
}
