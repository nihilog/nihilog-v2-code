import React from 'react';
import { MDXComponents } from 'mdx/types';
import { Heading } from '@/components/Base';

/** 여기에 필요한 항목들을 넣는다. */
export const CustomMDX: MDXComponents = {
  h1: (props) => <Heading type='h2'>{props.children}</Heading>,
  h2: (props) => <Heading type='h3'>{props.children}</Heading>,
  h3: (props) => <Heading type='h4'>{props.children}</Heading>,
  h4: (props) => <Heading type='h5'>{props.children}</Heading>,
};
