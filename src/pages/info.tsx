import React from 'react';
import tw, { TwStyle, css } from 'twin.macro';
import { SerializedStyles } from '@emotion/react';
import { AppLayout } from '@/layouts';
import { Box, Heading, Text } from '@/components/Base';
import { ChartGrid, DonutChart } from '@/components/Content';

interface Props {
  styles?: SerializedStyles | TwStyle;
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
          <Box position='middle'>
            <Text>이 블로그는 프로그래밍을 공부하면서 만드는 프로젝트 일지나 공부해왔던 것들을 정리하고, 복습내용을 기록하는 것을 목적으로 만들어진 블로그입니다. 연차는 1도 없지만 나름 개발자라고 생각해서 본인이 직접 구축한 블로그 하나쯤은 있어야 할 것 같아서 만들게 되었습니다. 이 블로그는 버전 2이며 앞으로도 계속해서 업데이트 될 예정입니다.</Text>
          </Box>
          <Heading mode='sub-title'>보유 기술</Heading>
          <Box>
            {/* TODO: 보유 기술을 어느정도인지 남겨두기 */}
            <Text styles={tw` mb-5! `}>아래는 다룰 수 있는 기술들에 대한 표입니다. 각 분야별로 정리해두었습니다. 웹 관련 기술이 아니더라도 습득하면 여기에 추가할 생각입니다.</Text>
            <ChartGrid title='웹 개발 기초'>
              <DonutChart name='HTML' number={0.8} color='#e34c26' />
              <DonutChart name='CSS' number={0.8} color='#264de4' />
              <DonutChart name='JavaScript' number={0.85} color='#f0db4f' />
              <DonutChart name='TypeScript' number={0.75} color='#007acc' />
            </ChartGrid>
            <ChartGrid title='프론트엔드 라이브러리 / 프레임워크'>
              <DonutChart name='ReactJS' number={0.85} color='#61dafb' />
              <DonutChart name='VueJS' number={0.55} color='#41b883' />
              <DonutChart name='NextJS' number={0.7} color='#000000' />
              <DonutChart name='ReactRouter' number={0.6} color='#ed404d' />
              <DonutChart name='ReactQuery' number={0.6} color='#ff4154' />
              <DonutChart name='RTK' number={0.65} color='#f59e0b' />
            </ChartGrid>
            <ChartGrid title='스타일링 라이브러리 / 프레임워크'>
              <DonutChart name='Styled Components' number={0.9} color='#393939' />
              <DonutChart name='EmotionJS' number={0.9} color='#b4319e' />
              <DonutChart name='twin.macro' number={0.7} color='#6425f7' />
              <DonutChart name='TailwindCSS' number={0.75} color='#38bdf8' />
            </ChartGrid>
            <ChartGrid title='백엔드'>
              <DonutChart name='ExpressJS' number={0.6} />
              <DonutChart name='NestJS' number={0.65} color='#e11e4d' />
              <DonutChart name='Prisma' number={0.7} color='#0c3249' />
            </ChartGrid>
          </Box>
        </div>
      </AppLayout>
    </>
  );
}
