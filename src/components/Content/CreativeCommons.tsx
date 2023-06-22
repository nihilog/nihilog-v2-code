import React from 'react';
import tw, { css } from 'twin.macro';
import { SerializedStyles } from '@emotion/react';
import { Icon } from '@iconify/react';

interface Props {
  styles?: SerializedStyles;
}

export function CreativeCommons({ styles, }: Props) {
  const style = {
    default: css([
      tw` bg-black-400 flex flex-col gap-2 rounded-2 items-end p-2 border border-black-base/50 `,
      styles,
    ]),
    message: css([
      tw` text-white `,
    ]),
    ccl: css([
      tw` bg-white text-black-base py-1 px-2 flex flex-row gap-1 rounded-2 `,
    ]),
  };

  return (
    <>
      <div css={style.default}>
        <div css={style.message}>
          이 포스트는 다음과 같은 CCL을 따릅니다. (CC-BY-SA)
        </div>
        <div css={style.ccl}>
          <Icon icon='ri:creative-commons-line' fontSize={30} />
          <Icon icon='ri:creative-commons-by-line' fontSize={30} />
          <Icon icon='ri:creative-commons-sa-line' fontSize={30} />
        </div>
      </div>
    </>
  );
}
