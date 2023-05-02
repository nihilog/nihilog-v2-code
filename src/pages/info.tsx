import React from 'react';
import tw, { css } from 'twin.macro';
import { SerializedStyles } from '@emotion/react';
import { AppLayout } from '@/layouts';
import { Box, Heading, Text } from '@/components/Base';

interface Props {
  styles?: SerializedStyles;
}

export default function InfoPage({ styles, }: Props) {
  const style = {
    default: css([
      tw`  `,
      styles,
    ]),
  };

  return (
    <>
      <AppLayout title='소개'>
        <div css={style.default}>
          <Heading mode='sub-title'>공부? 기록? 을 위한 기술 블로그</Heading>
          <Box>
            {/* TODO: 본인에 대해 간단하게 소개글 작성하기 */}
            <Text>이것은 테스트</Text>
          </Box>
          <Heading mode='sub-title'>보유 기술</Heading>
          <Box>
            {/* TODO: 보유 기술을 어느정도인지 남겨두기 */}
            <Text>보유 기술은 추가적으로 컴포넌트 만들어서 처리할 예정 그래프 같은 걸 이용하면 더 좋을 것 같지만 좀 더 심플하게 처리하는 것도 좋을 것 같은?</Text>
          </Box>
        </div>
      </AppLayout>
    </>
  );
}
