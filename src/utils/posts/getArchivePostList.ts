import { parseJson } from './parseJson';

export const getArchivePostList = (archive: string) => {
  let posts = parseJson();

  return posts.filter(
    (post) => post.slug.match(archive) !== null
  );
};
