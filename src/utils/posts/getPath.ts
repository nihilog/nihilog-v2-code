import { readdirSync } from 'fs';
import { join } from 'path';

export const getPath = (year: string) => {
  return join(process.cwd(), 'posts', year);
};

export const getAllPaths = () => {
  return readdirSync(join(process.cwd(), 'posts'))
    .filter((item) => !item.includes('.md'))
    .filter((item) => item !== '0000');
};
