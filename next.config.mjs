/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export", // enables `next export`
  images: {
    unoptimized: true, // needed if you use <Image> from next/image
  },
  basePath: "", // leave empty since this is your root user site
  assetPrefix: "", // no prefix needed
};

export default nextConfig;
