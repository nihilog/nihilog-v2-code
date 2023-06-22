import React, { useEffect, useMemo, useState } from 'react';
import tw, { css } from 'twin.macro';
import { SerializedStyles } from '@emotion/react';
import { Icon } from '@iconify/react';
import { getContrast } from '@/utils/getcontrast';

interface Props {
  children: React.ReactNode;
  className: string;
  styles?: SerializedStyles;
}

export function Pre({ children, className, styles, }: Props) {
  const [ icon, setIcon, ] = useState('');
  const [ color, setColor, ] = useState('');
  const [ bgColor, setBgColor, ] = useState('');

  const lang = useMemo(() => {
    return className.match(/^language-[a-zA-Z]+/)[0]
      .replace('language-', '')
      .toUpperCase();
  }, [ className, ]);

  useEffect(() => {
    switch (lang) {
      case 'HTML':
        setIcon('akar-icons:html-fill');
        setColor(getContrast('#e34c26'));
        setBgColor('#e34c26');
        break;
      case 'JS':
        setIcon('teenyicons:javascript-solid');
        setColor(getContrast('#f0db4f'));
        setBgColor('#f0db4f');
        break;
      case 'TS':
        setIcon('teenyicons:typescript-solid');
        setColor(getContrast('#007acc'));
        setBgColor('#007acc');
        break;
      case 'JSON':
        setIcon('codicon:json');
        setColor(getContrast('#666666'));
        setBgColor('#666666');
        break;
      case 'JAVA':
        setIcon('devicon-plain:java-wordmark');
        setColor(getContrast('#f89820'));
        setBgColor('#f89820');
        break;
      case 'PYTHON':
        setIcon('teenyicons:python-solid');
        setColor(getContrast('#4B8BBE'));
        setBgColor('#4B8BBE');
        break;
      case 'CSS':
        setIcon('akar-icons:css-fill');
        setColor(getContrast('#264de4'));
        setBgColor('#264de4');
        break;
      case 'SCSS':
        setIcon('akar-icons:sass-fill');
        setColor(getContrast('#fc9474'));
        setBgColor('#fc9474');
        break;
      default:
        break;
    }
  }, [ lang, ]);

  const style = {
    default: css([
      tw` rounded-b-1 mb-5 overflow-scroll `,
      tw` font-code py-3 [code]:( font-code [span]:( font-code ) ) `,
      tw` [code>span]:( block pl-3 w-full py-[2px] ) `,
      styles,
    ]),
    lang: css([
      css(css`
        color: ${color};
        background-color: ${bgColor};
      `),
      tw` rounded-t-1 flex flex-row gap-1 items-center p-2 `,
    ]),
  };

  return (
    <>
      <div css={style.lang}>
        <Icon icon={icon} />
        <p>{lang}</p>
      </div>
      <pre css={style.default} className={className}>
        {children}
      </pre>
    </>
  );
}
