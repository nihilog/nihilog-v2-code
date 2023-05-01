const { writeFile, } = require('fs');
const { join, } = require('path');
const { getAllPaths, } = require('./getPath');
const { getPostsByYear, } = require('./getPostsByYear');

const createAllPosts = () => {
  const years = getAllPaths();

  let allPosts = [];

  for (const year in years) {
    if (Object.prototype.hasOwnProperty.call(years, year)) {
      allPosts = allPosts.concat(getPostsByYear(years[year]));
    }
  }

  allPosts = allPosts.sort((a, b) => {
    const beforeDate = a.frontMatter.created;
    const afterDate = b.frontMatter.created;

    return afterDate - beforeDate;
  });

  writeFile(
    join(process.cwd(), 'src', 'data', 'posts.json'),
    JSON.stringify(allPosts),
    {
      encoding: 'utf8',
    },
    (error) => {
      if (error) {
        console.error(error);
      } else {
        console.log('파일이 성공적으로 생성되었습니다.');
      }
    }
  );
};

module.exports = { createAllPosts, };
