import { MDXRemoteSerializeResult } from 'next-mdx-remote';

export interface IFrontMatter {
  id?: number;
  title?: string;
  description?: string;
  cover?: string;
  tags?: string[];
  category?: string;
  created?: Date | number;
  updated?: Date | number;
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
