import { withPayload } from "@payloadcms/next/withPayload";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "picsum.photos",
        port: "",
        pathname: "/**",
      },
    ],
  },
  serverExternalPackages: ["mongodb"],
  turbopack: {
    // Configure webpack loaders for Payload CMS
    rules: {
      "*.svg": {
        loaders: ["@svgr/webpack"],
        as: "*.js",
      },
      "*.scss": {
        loaders: ["sass-loader"],
      },
    },
  },
};

export default withPayload(nextConfig);
