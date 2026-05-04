/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  reactCompiler: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "c8.alamy.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
