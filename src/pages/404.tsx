import React from 'react';
import tw, { css } from 'twin.macro';
import { AppLayout } from '@/layouts';

const NotPound404 = () => {
  const style = {
    default: css([
      tw`  `,
    ]),
  };

  return (
    <>
      <AppLayout
        title='에러-404'
        url='/404'
      >
        <div css={style.default} id='404-page'>페이지를 찾을 수 없습니다.</div>
      </AppLayout>
    </>
  );
};

export default NotPound404;
