import React from 'react';
import Head from 'next/head';
import dayjs from 'dayjs';
import { IMetaData } from '@/types/site.types';
import { siteData } from '@/data/config.data';

interface IMetaProps {
  meta: IMetaData;
}

export function Meta({ meta, }: IMetaProps) {
  const {
    title, url, description, keywords, author,
    // eslint-disable-next-line no-unused-vars
    image, type, tags, section, created, updated,
  } = meta;

  const siteTitle = `${title} - ${siteData.title}`;
  const siteDescription = description || siteData.description;
  const siteURL = `${siteData.url}${url}`;
  const siteKeywords = keywords || siteData.keywords;
  const siteImage = image || `${siteData.url}${siteData.image}`;
  const siteType = type || siteData.type;

  const articleCreated = `${dayjs(created).format('YYYY-MM-DDTHH:mm:ss')}.000Z`;
  const articleUpdated = `${dayjs(updated).format('YYYY-MM-DDTHH:mm:ss')}.000Z`;

  return (
    <>
      <Head>
        <meta property='og:site_name' content={siteData.title} />
        <meta property='og:title' content={siteTitle} />
        <meta property='og:type' content={siteType} />
        <meta property='og:description' content={siteDescription} />
        <meta property='og:image' content={siteImage} />
        <meta property='og:url' content={siteURL} />
        <meta property='og:locale' content='ko_KR' />

        {siteType === 'article' && (
          <>
            <meta property='article:section' content={section} />
            <meta property='article:tag' content={tags} />
            <meta property='article:author' content={author} />
            <meta property='article:published_time' content={articleCreated} />
            <meta property='article:modified_time' content={articleUpdated} />
          </>
        )}

        <meta name='twitter:card' content='summary_large_image' />
        <meta name='twitter:site' content={`@${author}`} />
        <meta name='twitter:creator' content={`@${author}`} />
        <meta name='twitter:title' content={siteTitle} />
        <meta name='twitter:description' content={siteDescription} />
        <meta name='twitter:image' content={siteImage} />

        <meta name='description' content={siteDescription} />
        <meta name='keywords' content={siteKeywords} />
        <meta name='generator' content='MS Visual Studio Code' />
        <meta name='author' content={author} />
        <link rel='canonical' href={siteURL} />

        <title>{siteTitle}</title>
      </Head>
    </>
  );
}
