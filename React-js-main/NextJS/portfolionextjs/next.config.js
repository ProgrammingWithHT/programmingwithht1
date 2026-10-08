/** @type {import('next').NextConfig} */

const nextConfig = {
  experimental: {
    appDir: true,
     serverComponentsExternalPackages: ["mongoose"],
  },
  env: {
    DB_CONNECTION : process.env.DB_CONNECTION,
    BASE_URL: process.env.BASE_URL,
  },
  webpack: (config) => {
    // this will override the experiments
    config.experiments = { ...config.experiments, topLevelAwait: true };
    // this will just update topLevelAwait property of config.experiments
    // config.experiments.topLevelAwait = true 
    return config;
  },
 
}



module.exports = nextConfig

