import { createMDX } from 'fumadocs-mdx/next';

let withMDX;
try {
  withMDX = createMDX();
} catch (err) {
  if (!(err instanceof Error)) {
    throw new Error(typeof err === 'string' ? err : JSON.stringify(err));
  }
  throw err;
}

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