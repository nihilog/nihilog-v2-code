import matter from 'gray-matter';
import { serialize } from 'next-mdx-remote/serialize';
import remarkGfm from 'remark-gfm';
import remarkUnwrapImages from 'remark-unwrap-images';
import rehypePrism from 'rehype-prism-plus';
import rehypeCodeTitles from 'rehype-code-titles';
import { getPostFile } from './getPostFile';
import { IFrontMatter, IMDX } from '@/types/mdx.types';

export const getSinglePost = async (year: string, slug: string): Promise<IMDX> => {
  const source = getPostFile(year, `${slug}.mdx`);
  const { data, content, } = matter(source);

  let frontMatter: IFrontMatter = { ...data, };

  frontMatter = {
    ...frontMatter,
    created: (frontMatter.created as Date).getTime() - 32400000,
    updated: (frontMatter.updated as Date).getTime() - 32400000,
  };

  const mdxSource = await serialize(content, {
    mdxOptions: {
      remarkPlugins: [
        remarkGfm,
        remarkUnwrapImages,
      ],
      rehypePlugins: [
        rehypePrism,
        rehypeCodeTitles,
      ],
      format: 'mdx',
    },
  });

  return {
    frontMatter,
    content: mdxSource,
  };
};
