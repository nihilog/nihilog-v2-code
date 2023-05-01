import React from 'react';
import { Global } from '@emotion/react';
import { useRouter } from 'next/router';
import tw, { css } from 'twin.macro';
import {
  Footer, Header, Main, Meta
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
      '@import url(https://fonts.cdnfonts.com/css/cascadia-code)',
      tw` [*]:( box-border p-0 m-0 font-sans tracking-[-1px] ) `,
      tw`
        [body]:(
          p-5 bg-black-50
          mb-sm:( bg-red-400 )
          mb-md:( bg-red-500 )
          mb-lg:( bg-red-600 )
        )
      `,
    ]),
  };

  return (
    <>
      <Global styles={style.global} />
      <Meta meta={meta} />

      <Header />
      <Main>{children}</Main>
      <Footer />
    </>
  );
}
