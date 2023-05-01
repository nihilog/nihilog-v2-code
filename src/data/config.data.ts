import { ISiteData } from '@/types/site.types';

export const siteData: ISiteData = {
  title: '니힐로그',
  description: '니힐의 개발, 공부 블로그',
  keywords: '개발, 웹개발, 코딩, 공부, programming, coding, web, development',
  author: 'NIHILncunia',
  type: 'website',
  url: process.env.NODE_ENV === 'development'
    ? 'http://localhost:3000'
    : '',
  image: '',
  version: 'v0.0.0',
};
