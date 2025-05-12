/** @type {import('next').NextConfig} */
import frontmatter from 'frontmatter-markdown-loader';

const nextConfig = {
  webpack: (config) => {
    config.module.rules.push({
      test: /\.md$/,
      use: [
        {
          loader: 'frontmatter-markdown-loader',
          options: { mode: ['react-component'] },
        },
      ],
    });

    return config;
  },
};

export default nextConfig;
