export interface ISiteData {
  title: string;
  description: string;
  url: string;
  type: string;
  image: string;
  keywords: string;
  author: string;
  postPerPage: number;
  version: string;
}

export interface IMetaData {
  title: string;
  url?: string;
  description?: string;
  author?: string;
  keywords?: string;
  type?: string;
  tags?: string;
  section?: string;
  created?: number;
  updated?: number;
  image?: string;
}

export interface IAppLayoutProps extends IMetaData {
  children: React.ReactNode;
}
