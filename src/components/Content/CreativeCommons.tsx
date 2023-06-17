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
      tw` flex flex-row items-center justify-between text-black-base `,
      styles,
    ]),
    ccl: css([
      tw` inline-flex flex-row p-1 rounded-1 border border-black-base/30 `,
    ]),
    user: css([
      tw` p-1 px-2 rounded-1 border bg-blue-100 border-blue-500/40 text-blue-600 `,
      tw` hover:( bg-blue-600 text-white ) `,
    ]),
  };

  return (
    <>
      <div css={style.default}>
        이 포스트는 다음과 같은 CCL을 따릅니다.
        <div css={style.ccl} title='CC-BY-SA'>
          <Icon icon='ri:creative-commons-line' fontSize={30} />
          <Icon icon='ri:creative-commons-by-line' fontSize={30} />
          <Icon icon='ri:creative-commons-sa-line' fontSize={30} />
        </div>
      </div>
    </>
  );
}
