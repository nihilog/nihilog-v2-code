const { readdirSync, } = require('fs');
const matter = require('gray-matter');
const { getPath, } = require('./getPath');
const { getPostFile, } = require('./getPostFile');

const getPostsByYear = (year) => {
  const POSTS_PATH = getPath(year);

  return readdirSync(POSTS_PATH)
    .filter((file) => /\.mdx$/.test(file))
    .map((file) => {
      const source = getPostFile(year, file);
      const { data, } = matter(source);

      let frontMatter = { ...data, };

      frontMatter = {
        ...frontMatter,
        created: (frontMatter.created).getTime() - 32400000,
        updated: (frontMatter.updated).getTime() - 32400000,
      };

      const listItem = {
        frontMatter,
        slug: file.replace(/\.mdx$/, ''),
        fullPath: `/posts/${frontMatter.id}`,
      };

      return listItem;
    })
    .filter((item) => item.frontMatter.published === true)
    .sort((a, b) => {
      const beforeDate = a.frontMatter.created;
      const afterDate = b.frontMatter.created;

      return afterDate - beforeDate;
    });
};

module.exports = { getPostsByYear, };
