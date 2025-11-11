import type { NextConfig } from 'next';
 
const nextConfig: NextConfig = {
  experimental: {
    // Enables Partial Prerendering (formerly ppr)
    cacheComponents: true,
  },
};

export default nextConfig;
