import { MDXRemoteSerializeResult } from 'next-mdx-remote';

export interface IFrontMatter {
  id?: number;
  title?: string;
  description?: string;
  cover?: string;
  tags?: string[];
  cluster?: [string, number];
  category?: string;
  created?: number | Date;
  updated?: number | Date;
  published?: boolean;
}

export interface IMDXList {
  frontMatter: IFrontMatter;
  slug: string;
  fullPath: string;
}

export interface IMDX {
  frontMatter: IFrontMatter;
  content: MDXRemoteSerializeResult;
}

export interface IItemData {
  data: string;
  icon: string;
  count: number;
}

export interface ICategoryPage {
  params: {
    category: string;
    page: string;
  }
}

export interface IArchivePage {
  params: {
    archive: string;
    page: string;
  }
}

export interface ITagPage {
  params: {
    tag: string;
    page: string;
  }
}

export interface IClusterPage {
  params: {
    cluster: string;
    page: string;
  }
}

export interface IH5 {
  id: string;
  text: string;
  name: 'H5';
}

export interface IH4 {
  id: string;
  text: string;
  name: 'H4';
  items?: IH5[];
}

export interface IH3 {
  id: string;
  text: string;
  name: 'H3';
  items?: IH4[];
}

export interface IH2 {
  id: string;
  text: string;
  name: 'H2';
  items?: IH3[];
}
