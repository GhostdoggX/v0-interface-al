/** @type {import('next').NextConfig} */
const baseConfig = {
  reactStrictMode: true,
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
};

let userConfig = {};
try {
  const mod = await import('./next.user-config.mjs');
  userConfig = mod.default ?? {};
} catch {
  userConfig = {};
}

export default {
  ...baseConfig,
  ...userConfig,
};
