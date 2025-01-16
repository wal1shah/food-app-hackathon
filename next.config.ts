import type { NextConfig } from "next";
/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["www.themealdb.com"], // Add the hostname here
  },
};

module.exports = nextConfig;

export default nextConfig;
