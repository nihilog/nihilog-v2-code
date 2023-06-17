import React from 'react';
import tw, { css } from 'twin.macro';
import { SerializedStyles } from '@emotion/react';
import { Icon } from '@iconify/react';
import { textStyle } from '@/styles';

interface Props {
  children: React.ReactNode;
  who?: string;
  cite?: string;
  styles?: SerializedStyles;
}

export function Quote({
  children, who, cite, styles,
}: Props) {
  const style = {
    default: css([
      textStyle.textSize,
      tw` p-3 border border-black-base/20 rounded-2 text-black-base bg-black-100/50 `,
      tw` mb-5 `,
      styles,
    ]),
    content: css([
      tw` italic text-justify break-all [span]:( ml-[2px] mr-[7px] ) `,
      tw` before:( content-[url('https://api.iconify.design/bxs/quote-left.svg?color=%23333')] ) `,
      tw` after:( content-[url('https://api.iconify.design/bxs/quote-right.svg?color=%23333')] ) `,
    ]),
    who: css([
      tw` flex flex-row gap-[2px] items-center justify-end `,
      cite && tw` [>a]:( flex flex-row gap-[2px] items-center justify-end text-black-500 hover:( text-black-700 underline ) ) `,
    ]),
  };

  return (
    <>
      <blockquote css={style.default} cite={cite}>
        <p css={style.content}>
          <span>{children}</span>
        </p>
        <p css={style.who}>
          {cite ? (
            <a href={cite} target='_blank' rel='noopener noreferrer'>
              <Icon icon='mdi:user' /> {who}
            </a>
          ) : (
            <><Icon icon='mdi:user' /> {who}</>
          )}
        </p>
      </blockquote>
    </>
  );
}
