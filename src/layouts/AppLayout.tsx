import React from 'react';
import { Global } from '@emotion/react';
import { useRouter } from 'next/router';
import tw, { css } from 'twin.macro';
import {
  Footer, Header, Main, Meta, SearchBar
} from '@/components/Layout';
import { IAppLayoutProps, IMetaData } from '@/types/site.types';

export function AppLayout({
  children, title, description, keywords, author, image, created, updated, tags, type, section,
}: IAppLayoutProps) {
  const { asPath, } = useRouter();

  const meta: IMetaData = {
    title,
    url: asPath,
    description,
    keywords,
    author,
    image,
    tags,
    type,
    section,
    created,
    updated,
  };

  const style = {
    global: css([
      '@import url(https://fonts.googleapis.com/earlyaccess/notosanskr.css)',
      (css`
        @font-face {
          font-family: 'CascadiaCode';
          src: url('/fonts/CascadiaCode.eot');
          src:
            url('/fonts/CascadiaCode.eot?#iefix') format('embedded-opentype'),
            url('/fonts/CascadiaCode.woff2') format('woff2'),
            url('/fonts/CascadiaCode.svg#CascadiaCode') format('svg'),
            url('/fonts/CascadiaCode.ttf') format('truetype'),
            url('/fonts/CascadiaCode.woff') format('woff');
          font-weight: normal;
          font-style: normal;
        }
      `),
      tw` [*]:( box-border p-0 m-0 font-sans tracking-[-1px] ) `,
      tw`
        [body]:(
          p-5 bg-black-100
        )
      `,
    ]),
  };

  return (
    <>
      <Global styles={style.global} />
      <Meta meta={meta} />

      <Header />
      <SearchBar />
      <Main>{children}</Main>
      <Footer />
    </>
  );
}
