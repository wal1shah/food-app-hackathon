import type { NextConfig } from "next";
/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["cdn.sanity.io"], // Add the hostname here
  },
};

module.exports = nextConfig;

export default nextConfig;
