/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["your-image-domain.com"], // Add any image domains if applicable
    formats: ["image/webp"], // Make sure WebP format is enabled
  },
};

export default nextConfig;
