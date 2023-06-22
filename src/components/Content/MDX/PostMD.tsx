import React, { useEffect, useRef, useState } from 'react';
import tw, { css, TwStyle } from 'twin.macro';
import { SerializedStyles } from '@emotion/react';
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote';
import { useRouter } from 'next/router';
import { CustomMDX } from './CustomMDX';
import { Box } from '@/components/Base';
import { CreativeCommons } from '../CreativeCommons';
import { Giscus } from '../Giscus';
import { Toc } from '../Toc';
import { IH2 } from '@/types/mdx.types';

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
  const [ toc, setToc, ] = useState<IH2[]>([]);

  const divRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  useEffect(() => {
    const h2Array: IH2[] = [];

    const nodeArray = Array.from(divRef.current.children);
    const headingArray = nodeArray.filter((node) => (
      node.nodeName.match(/H[1-6]/)
    ));

    headingArray.forEach((node, index) => {
      node.id = `toc${index}`;
    });

    headingArray.forEach((node: HTMLHeadingElement) => {
      if (node.nodeName === 'H2') {
        h2Array.push({
          id: node.id,
          text: node.innerText,
          name: node.nodeName,
          items: [],
        });
      } else if (node.nodeName === 'H3' && h2Array.length > 0) {
        const h3Array = h2Array[h2Array.length - 1].items;

        h3Array.push({
          id: node.id,
          text: node.innerText,
          name: node.nodeName,
          items: [],
        });
      } else if (node.nodeName === 'H4' && h2Array.length > 0) {
        const h3Array = h2Array[h2Array.length - 1].items;
        const h4Array = h3Array[h3Array.length - 1].items;

        h4Array.push({
          id: node.id,
          text: node.innerText,
          name: node.nodeName,
          items: [],
        });
      } else if (node.nodeName === 'H5' && h2Array.length > 0) {
        const h3Array = h2Array[h2Array.length - 1].items;
        const h4Array = h3Array[h3Array.length - 1].items;
        const h5Array = h4Array[h4Array.length - 1].items;

        h5Array.push({
          id: node.id,
          text: node.innerText,
          name: node.nodeName,
        });
      }
    });

    setToc(h2Array);
  }, [ divRef, router.asPath, ]);

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
      tw` rounded-2 mb-10 `,
    ]),
    hr: css([
      tw` border-[0] border-b-2 border-black-base/30 border-dashed h-[5px] my-10 `,
    ]),
  };

  return (
    <>
      <Box styles={style.default}>
        <div ref={divRef}>
          <img src={imageCover} alt={imageAlt} css={style.img} />
          <Toc toc={toc} />
          <MDXRemote {...content} components={CustomMDX} />
          <hr css={style.hr} />
          <CreativeCommons />
        </div>
      </Box>

      {process.env.NODE_ENV === 'production' && (
        <Box styles={tw` mt-10 `}>
          <Giscus />
        </Box>
      )}
    </>
  );
}
