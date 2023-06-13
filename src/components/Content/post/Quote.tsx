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
      tw` p-3 border border-black-base/30 rounded-2 text-black-base `,
      tw` mb-5 `,
      styles,
    ]),
    content: css([
      tw` flex flex-row gap-1 items-center justify-center italic `,
    ]),
    who: css([
      tw` flex flex-row gap-[2px] items-center justify-end `,
      cite && tw` [>a]:( flex flex-row gap-[2px] items-center justify-end text-black-500 hover:( text-black-700 underline ) ) `,
    ]),
  };

  return (
    <>
      <blockquote css={style.default} cite={cite}>
        <Icon icon='bxs:quote-left' fontSize={40} />
        <p css={style.content}>
          {children}
        </p>
        <Icon icon='bxs:quote-right' fontSize={40} css={tw` ml-auto mb-5 `} />
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
