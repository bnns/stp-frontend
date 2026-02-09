/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
  async rewrites() {
    return [
      {
        source: '/primer-simulation',
        destination: '/primer-simulation.html',
      },
    ];
  },
}
