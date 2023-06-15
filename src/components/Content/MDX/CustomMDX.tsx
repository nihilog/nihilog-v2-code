import React from 'react';
import { MDXComponents } from 'mdx/types';
import { Heading, Text } from '@/components/Base';
import {
  A,
  Bold, Code, ColorBox, Em, Pre, Quote, Strike, Ul
} from '../post';

// TODO: 이제 포스트 관련 컴포넌트를 만들고 디자인하는 일만 남음.
// TODO: MDX 폴더 안에 포스트 관련 컴포넌트를 만들도록 함.
export const CustomMDX: MDXComponents = {
  h1: (props) => (
    <Heading type='h2' mode='post-title'>{props.children}</Heading>
  ),
  h2: (props) => (
    <Heading type='h3' mode='post-title'>{props.children}</Heading>
  ),
  h3: (props) => (
    <Heading type='h4' mode='post-title'>{props.children}</Heading>
  ),
  h4: (props) => (
    <Heading type='h5' mode='post-title'>{props.children}</Heading>
  ),
  strong: (props) => (
    <Bold>{props.children}</Bold>
  ),
  em: (props) => (
    <Em>{props.children}</Em>
  ),
  del: (props) => (
    <Strike>{props.children}</Strike>
  ),
  p: (props) => (
    <Text>{props.children}</Text>
  ),
  a: (props) => (
    <A link={props.href}>{props.children}</A>
  ),
  code: (props) => (
    <Code>{props.children}</Code>
  ),
  pre: (props) => (
    <Pre className={props.className}>{props.children}</Pre>
  ),
  ul: (props) => {
    console.log(props);
    return (
      <Ul className={props.className}>{props.children}</Ul>
    );
  },
  Bold,
  Em,
  Strike,
  Quote,
  Text,
  A,
  ColorBox,
  Code,
  Pre,
};
