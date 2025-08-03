import { createMDX } from 'fumadocs-mdx/next';

const withMDX = (...args) => {
  try {
    return createMDX()(...args);
  } catch (err) {
    // Ensure the error is an instance of Error
    if (!(err instanceof Error)) {
      throw new Error(typeof err === 'string' ? err : JSON.stringify(err));
    }
    throw err;
  }
};

/** @type {import('next').NextConfig} */
const config = {
  reactStrictMode: true,
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

export default withMDX(config);
