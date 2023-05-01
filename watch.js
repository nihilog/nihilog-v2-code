const { join, } = require('path');
const chokidar = require('chokidar');
const { createAllPosts, } = require('./create/createAllPosts');

createAllPosts();

chokidar.watch(
  join(process.cwd(), 'posts'),
  { depth: 10, }
).on('all', (event) => {
  if (event === 'change') {
    createAllPosts();
    console.log('파일이 변경되었습니다.');
  }
});
