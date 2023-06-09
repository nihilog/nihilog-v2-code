import React, { useCallback, useEffect, useState } from 'react';
import tw, { css, TwStyle } from 'twin.macro';
import { SerializedStyles } from '@emotion/react';
import { useRouter } from 'next/router';
import { Icon } from '@iconify/react';
import { IMDXList } from '@/types/mdx.types';
import { textStyle } from '@/styles';
import { Heading, PageLink } from '../Base';
import { setDate } from '@/utils/date';

interface Props {
  post: IMDXList;
  styles?: SerializedStyles | TwStyle;
}

export function PostItem({ post, styles, }: Props) {
  const [ classString, setClassString, ] = useState('image-hide');
  const [ isCoverNone, setIsCoverNone, ] = useState(false);
  const [ cover, setCover, ] = useState('');

  const title = post.frontMatter.cluster.length > 0
    ? `[${post.frontMatter.cluster[0]}] ${post.frontMatter.title}`
    : post.frontMatter.title;

  const router = useRouter();

  useEffect(() => {
    if (post.frontMatter.cover === '') {
      setCover('https://drive.google.com/uc?export=view&id=1SD9HD4JtWQip-4P24NoYgSj__iXXw3AT');
      setIsCoverNone(true);
      setClassString('image-show');
    } else {
      setCover(post.frontMatter.cover);
      setIsCoverNone(false);
      setClassString('image-hide');
    }
  }, [ post, ]);

  const onClickLink = useCallback(() => {
    router.push('/posts/[id]', post.fullPath);
  }, [ post, router, ]);

  const onClickCategoryLink = useCallback((event: React.MouseEvent) => {
    event.stopPropagation();

    router.push(`/categories/${post.frontMatter.category}/page/1`);
  }, [ post, router, ]);

  const onMouseEnterImage = useCallback(() => {
    if (isCoverNone) {
      return;
    }

    setClassString('image-show');
  }, [ isCoverNone, ]);

  const onMouseLeaveImage = useCallback(() => {
    if (isCoverNone) {
      return;
    }

    setClassString('image-hide');
  }, [ isCoverNone, ]);

  const style = {
    default: css([
      tw` relative overflow-hidden rounded-2 cursor-pointer `,
      styles,
    ]),
    image: css([
      tw` block `,
    ]),
    info: css([
      textStyle.textSize,
      tw` w-full aspect-square z-10 p-3 absolute bg-black-base/70 flex flex-col `,
      tw` [&.image-hide]:( bottom-[-100%] opacity-0 ) `,
      tw` [&.image-show]:( bottom-0 opacity-100 ) `,
      tw` transition-all duration-[300ms] ease-in-out `,
    ]),
  };

  return (
    <div
      css={style.default}
      onClick={onClickLink}
      onMouseEnter={onMouseEnterImage}
      onMouseLeave={onMouseLeaveImage}
    >
      <img src={cover} alt={title} />
      <div
        role='link'
        className={classString}
        css={style.info}
      >
        <Heading type='h3' styles={tw`text-white mb-5`}>{title}</Heading>
        <p css={tw`text-white flex-[1]`}>{setDate(post.frontMatter.created)}</p>
        <div css={tw`text-white flex items-center justify-start gap-1`}>
          <span>카테고리</span>
          <Icon icon='eva:arrow-right-fill' />
          <PageLink
            href='/categories/[category]/page/[page]'
            as={`/categories/${post.frontMatter.category}/page/1`}
            mode='button'
            styles={tw`py-0 px-2`}
            onClick={onClickCategoryLink}
          >
            {post.frontMatter.category}
          </PageLink>
        </div>
      </div>
    </div>
  );
}
