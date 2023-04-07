export const checkEnv = () => {
  return process.env.NODE_ENV === 'development'
    ? 'http://localhost:3000'
    : 'https://bhimia-shop.vercel.app';
};
