import React from 'react';
import tw, { css } from 'twin.macro';
import { SerializedStyles } from '@emotion/react';
import { Icon } from '@iconify/react';

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
      tw` p-3 border border-black-base/30 rounded-2 mb-5 `,
      styles,
    ]),
    content: css([
      tw` flex flex-row gap-1 items-center `,
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
          <Icon icon='bi:chat-square-quote' />
          {children}
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
