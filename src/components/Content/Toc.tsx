import React from 'react';
import tw, { css } from 'twin.macro';
import { SerializedStyles } from '@emotion/react';
import { IH2 } from '@/types/mdx.types';
import { A } from './post';
import { Heading } from '../Base';

interface Props {
  toc?: IH2[];
  styles?: SerializedStyles;
}

export function Toc({ toc, styles, }: Props) {
  const style = {
    default: css([
      tw` my-10 p-3 bg-black-100/50 rounded-2 border border-black-base/20 `,
      tw` [li]:( mt-1 ) `,
      tw` [li>span]:( mr-2 ) `,
      styles,
    ]),
  };

  return (
    <>
      {toc.length > 0 && (
        <div id='post-table-of-contents' css={style.default}>
          <Heading type='h2' mode='post-title' styles={tw` mb-5 `}>목차</Heading>
          <ul id='table-of-contents-list'>
            {toc.map((item, index) => (
              <li key={item.name + item.id}>
                <span>{index + 1}.</span>
                <A link={`#${item.id}`}>{item.text}</A>
                {item.items.length > 0 && (
                  <ul>
                    {item.items.map((subItem, subIndex) => (
                      <li key={subItem.name + subItem.id} css={tw` ml-5 `}>
                        <span>{index + 1}.{subIndex + 1}.</span>
                        <A link={`#${subItem.id}`}>{subItem.text}</A>
                        {subItem.items.length > 0 && (
                          <ul>
                            {subItem.items.map((subItem2, subIndex2) => (
                              <li key={subItem2.name + subItem2.id} css={tw` ml-5 `}>
                                <span>{index + 1}.{subIndex + 1}.{subIndex2 + 1}.</span>
                                <A link={`#${subItem2.id}`}>{subItem2.text}</A>
                                {subItem2.items.length > 0 && (
                                  <ul>
                                    {
                                      subItem2.items.map((lastItem, lastIndex) => (
                                        <li key={lastItem.name + lastItem.id} css={tw` ml-5 `}>
                                          <span>{index + 1}.{subIndex + 1}.{subIndex2 + 1}.{lastIndex + 1}.</span>
                                          <A link={`#${lastItem.id}`}>{lastItem.text}</A>
                                        </li>
                                      ))
                                    }
                                  </ul>
                                )}
                              </li>
                            ))}
                          </ul>
                        )}
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
}
