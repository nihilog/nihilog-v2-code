import React, { useEffect, useState } from 'react';
import tw, { css, TwStyle } from 'twin.macro';
import { SerializedStyles } from '@emotion/react';
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote';
import { CustomMDX } from './CustomMDX';
import { Box } from '@/components/Base';
import { CreativeCommons } from '../CreativeCommons';

interface Props {
  content: MDXRemoteSerializeResult;
  cover: string;
  title: string;
  styles?: SerializedStyles | TwStyle;
}

export function PostMD({
  content, cover, title, styles,
}: Props) {
  const [ imageCover, setImageCover, ] = useState('');
  const [ imageAlt, setImageAlt, ] = useState('');

  useEffect(() => {
    if (cover) {
      setImageCover(cover);
      setImageAlt(title);
    } else {
      setImageCover('https://drive.google.com/uc?export=view&id=1SD9HD4JtWQip-4P24NoYgSj__iXXw3AT');
      setImageAlt('기본 이미지');
    }
  }, [ cover, ]);

  const style = {
    default: css([
      tw`  `,
      styles,
    ]),
    img: css([
      tw` rounded-2 mb-5 `,
    ]),
  };

  return (
    <>
      <Box styles={style.default}>
        <img src={imageCover} alt={imageAlt} css={style.img} />
        <MDXRemote {...content} components={CustomMDX} />
        <CreativeCommons />
      </Box>
    </>
  );
}
