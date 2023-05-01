import { readFileSync } from 'fs';
import { join } from 'path';
import { getPath } from './getPath';

export const getPostFile = (year: string, slug: string) => {
  const POSTS_PATH = getPath(year);
  return readFileSync(join(POSTS_PATH, slug), 'utf8');
};
