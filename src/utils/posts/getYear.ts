export const getYear = (slug: string) => {
  const [ year, ] = slug.match(/^[0-9]{4}/gi);
  return year;
};
