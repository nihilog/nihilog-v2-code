import React, { useEffect, useState } from 'react';
import tw, { css } from 'twin.macro';
import { SerializedStyles } from '@emotion/react';
import { Icon } from '@iconify/react';
import { Box } from '@/components/Base';

interface Props {
  children: React.ReactNode;
  color: ('red' | 'green' | 'yellow' | 'blue');
  styles?: SerializedStyles;
}

export function ColorBox({ children, color, styles, }: Props) {
  const [ boxIcon, setBoxIcon, ] = useState('');

  useEffect(() => {
    switch (color) {
      case 'blue':
        setBoxIcon('mdi:information-slab-box-outline');
        break;
      case 'green':
        setBoxIcon('mdi:check-circle-outline');
        break;
      case 'red':
        setBoxIcon('material-symbols:dangerous-outline-rounded');
        break;
      case 'yellow':
        setBoxIcon('mdi:warning-outline');
        break;
      default:
        break;
    }
  }, [ color, ]);

  const style = {
    default: css([
      tw` border rounded-1 shadow-none mb-5 nth-last-1:mb-0 `,
      color === 'blue' && tw`
        bg-blue-100 border-blue-400/50
        [p,svg]:( text-blue-600! )
      `,
      color === 'red' && tw`
        bg-red-100 border-red-400/30
        [p,svg]:( text-red-600! )
      `,
      color === 'green' && tw`
        bg-green-100 border-green-400/60
        [p,svg]:( text-green-700! )
      `,
      color === 'yellow' && tw`
        bg-yellow-100 border-yellow-400/60
        [p,svg]:( text-yellow-700! )
      `,
      styles,
    ]),
    icon: css([
      tw` mb-2 `,
    ]),
  };

  return (
    <>
      <Box styles={style.default}>
        <Icon icon={boxIcon} fontSize={40} css={style.icon} />
        {children}
      </Box>
    </>
  );
}
