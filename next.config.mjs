/** @type {import('next').NextConfig} */
const nextConfig = {
  reactCompiler: true,

  turbopack: {
    rules: {
      "*.svg": {
        loaders: ["@svgr/webpack"],
        as: "*.js",
      },
    },
  },

  webpack(config) {
    const fileLoaderRule = config.module.rules.find((rule) =>
      rule.test?.test?.(".svg"),
    );

    if (fileLoaderRule) {
      config.module.rules.push(
        {
          ...fileLoaderRule,
          test: /\.svg$/i,
          resourceQuery: /url/, // *.svg?url
        },
        {
          test: /\.svg$/i,
          issuer: fileLoaderRule.issuer,
          resourceQuery: {
            not: [...(fileLoaderRule.resourceQuery?.not || []), /url/],
          },
          use: ["@svgr/webpack"],
        },
      );

      fileLoaderRule.exclude = /\.svg$/i;
    }

    return config;
  },

  async rewrites() {
    const rawUrl =
      process.env.NEXT_PUBLIC_API_URL ||
      "https://bus-ticket-backend-dun.vercel.app";
    const backendUrl = rawUrl.replace(/\/+$/, "");
    return [
      {
        source: "/api/:path*",
        destination: `${backendUrl}/api/:path*`,
      },
    ];
  },
};

export default nextConfig;
