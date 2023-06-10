import React from 'react';
import tw, { css } from 'twin.macro';
import { AppLayout } from '@/layouts';
import { Heading, PageLink } from '@/components/Base';

const NotPound404 = () => {
  const style = {
    default: css([
      tw`  `,
    ]),
    link: css([
      tw` mt-5 `,
    ]),
  };

  return (
    <>
      <AppLayout
        title='페이지를 찾을 수 없습니다'
      >
        <div css={style.default} id='404-page'>
          <Heading type='h2' mode='message'>페이지를 찾을 수 없습니다.</Heading>
          <div>
            <PageLink href='/' mode='button' styles={style.link}>홈으로 돌아가기</PageLink>
          </div>
        </div>
      </AppLayout>
    </>
  );
};

export default NotPound404;
