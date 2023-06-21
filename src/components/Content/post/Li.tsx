import React, { useEffect, useRef, useState } from 'react';
import tw, { css } from 'twin.macro';
import { SerializedStyles } from '@emotion/react';

interface Props {
  children: React.ReactNode;
  styles?: SerializedStyles;
}

export function Li({ children, styles, }: Props) {
  const [ parentList, setparentList, ] = useState('');
  const [ isTaskItem, setIsTaskItem, ] = useState(false);
  const [ isMainItem, setIsMainItem, ] = useState(true);
  const liRef = useRef<HTMLLIElement>(null);

  useEffect(() => {
    let parentList: string;
    let parent = liRef.current.parentNode as HTMLElement;

    if (parent.nodeName === 'UL') {
      parentList = 'UL';
      setparentList('UL');
    } else {
      parentList = 'OL';
      setparentList('OL');
    }

    if (parentList === 'UL' && parent.parentNode.nodeName !== 'LI') {
      setIsMainItem(true);
    } else {
      setIsMainItem(false);
    }

    if (parent.classList.contains('contains-task-list')) {
      setIsTaskItem(true);
    } else {
      setIsTaskItem(false);
    }
  }, [ liRef, ]);

  const style = {
    default: css([
      tw` break-all text-black-base `,
      parentList === 'UL' && isMainItem && !isTaskItem && tw` mt-1 nth-1:mt-0 before:( mr-1 content-[url('https://api.iconify.design/eva/arrow-right-fill.svg?color=%23333')] ) `,
      parentList === 'UL' && !isMainItem && !isTaskItem && tw` mt-1 before:( mr-1 content-[url('https://api.iconify.design/eva/arrow-right-outline.svg?color=%23333')] ) `,
      styles,
    ]),
  };

  return (
    <>
      <li css={style.default} ref={liRef}>{children}</li>
    </>
  );
}
