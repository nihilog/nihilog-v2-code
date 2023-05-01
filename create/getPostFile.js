const { join, } = require('path');
const { readFileSync, } = require('fs');
const { getPath, } = require('./getPath');

const getPostFile = (year, slug) => {
  const POSTS_PATH = getPath(year);
  return readFileSync(join(POSTS_PATH, slug), 'utf8');
};

module.exports = { getPostFile, };
