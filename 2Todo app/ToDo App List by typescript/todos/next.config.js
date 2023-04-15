/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode:"true",
  experimental:{appDir:"true"},
  async rewrites(){
    return[
      {
        source:"/api/:path*",
        destination:"http://localhost:3001/api/:path*",
      },
    ];
  },

  // experimental: {
  //   appDir: true,
  // },
}

module.exports = nextConfig
