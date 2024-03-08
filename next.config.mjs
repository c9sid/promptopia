/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    // appDir: true,
    serverComponentsExternalPackages: ["mongoose"],
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'lh3.googleusercontent.com'
      },
    ]
  },
  experimental:{
    missingSuspenseWithCSRBailout: false,
  },
  webpack(config) {
    config.experiments = {
      ...config.experiments,
      topLevelAwait: true,
    }
    return config
  }
}

export default nextConfig
