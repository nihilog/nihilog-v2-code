import React from 'react';
import tw, { css } from 'twin.macro';
import { SerializedStyles } from '@emotion/react';
import {
  FaGithub, FaInstagram, FaRegCopyright, FaRegEnvelope
} from 'react-icons/fa';
import { textStyle } from '@/styles';

interface Props {
  styles?: SerializedStyles;
}

export function Footer({ styles, }: Props) {
  const currentYear = new Date().getFullYear();
  const startYear = 2023;

  const year = currentYear > startYear ? `${startYear}-${currentYear}` : currentYear;

  const style = {
    default: css([
      tw` bg-black-base rounded-2 p-4 text-white `,
      styles,
    ]),
    small: css([
      textStyle.textSize,
    ]),
    copy: css([
      tw` flex items-center gap-1 justify-center `,
    ]),
    icons: css([
      tw` flex items-center justify-center gap-2 mb-2`,
      tw` [a]:( bg-black-700 flex items-center justify-center p-3 rounded-[50%] text-[130%] ) `,
      tw` [a]:hover:( bg-white text-black-base ) `,
    ]),
  };

  return (
    <>
      <footer css={style.default}>
        <small css={[ style.small, style.icons, ]}>
          <a href='mailto:nihil_ncunia@naver.com' target='_blank' rel='noopener noreferrer' aria-label='email'>
            <FaRegEnvelope />
          </a>
          <a href='https://www.instagram.com/nihil_illust/' target='_blank' rel='noopener noreferrer' aria-label='instagram'>
            <FaInstagram />
          </a>
          <a href='https://github.com/NIHILncunia' target='_blank' rel='noopener noreferrer' aria-label='github'>
            <FaGithub />
          </a>
        </small>
        <small css={[ style.small, style.copy, ]}>
          <FaRegCopyright /> {year}. NIHILncunia.
        </small>
      </footer>
    </>
  );
}
