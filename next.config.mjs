/** @type {import('next').NextConfig} */
const nextConfig = {   
  env: {
    DISABLE_SERVER_ACTIONS: process.env.NODE_ENV === 'production',
    }, 
  images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: "cdn.sanity.io",
        },
      ],
    },}

export default nextConfig;
