import React from 'react';
import tw, { css } from 'twin.macro';
import { SerializedStyles } from '@emotion/react';
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote';
import { CustomMDX } from './CustomMDX';

interface Props {
  content: MDXRemoteSerializeResult;
  styles?: SerializedStyles;
}

export function PostMD({ content, styles, }: Props) {
  const style = {
    default: css([
      tw`  `,
      styles,
    ]),
  };

  return (
    <>
      <div css={style.default}>
        <MDXRemote {...content} components={CustomMDX} />
      </div>
    </>
  );
}
