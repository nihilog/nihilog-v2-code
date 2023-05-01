import { readFileSync } from 'fs';
import { join } from 'path';
import { IMDXList } from '@/types/mdx.types';

export const parseJson = (): IMDXList[] => {
  const posts = readFileSync(
    join(process.cwd(), 'src', 'data', 'posts.json'),
    'utf8'
  );

  return JSON.parse(posts);
};
