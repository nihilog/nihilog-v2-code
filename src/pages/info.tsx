import React from 'react';
import tw, { css } from 'twin.macro';
import { SerializedStyles } from '@emotion/react';
import { AppLayout } from '@/layouts';

interface Props {
  styles?: SerializedStyles;
}

export default function InfoPage({ styles, }: Props) {
  // TODO: 소개 페이지 구상하고 만들기
  const style = {
    default: css([
      tw`  `,
      styles,
    ]),
  };

  return (
    <>
      <AppLayout title='소개'>
        <div css={style.default}>content</div>
      </AppLayout>
    </>
  );
}
