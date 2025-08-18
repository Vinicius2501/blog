import slugify from 'slugify';

export const makeslugbyTitle = (text: string) => {
  const slug = slugify(text, {
    lower: true,
    strict: true,
    trim: true,
  });
  return slug;
};
