const { readdirSync, } = require('fs');
const { join, } = require('path');

/**
 * @param {string} year
 * @returns {string}
 */
const getPath = (year) => {
  return join(process.cwd(), 'posts', year);
};

const getAllPaths = () => {
  return readdirSync(join(process.cwd(), 'posts'))
    .filter((item) => !item.includes('.md'))
    .filter((item) => item !== '0000');
};

module.exports = { getPath, getAllPaths, };
