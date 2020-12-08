const path = require('path');
const tailwindcss = require('tailwindcss');
const filterRules = (filters) => (rule) => {
  return filters.some((filter) => String(rule.test) === String(filter));
};

const resolve = (dir) => {
  return path.join(__dirname, '..', dir);
};

module.exports = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials'],
  webpack: async (config) => {
    config.resolve.alias['@'] = resolve('src/');

    config.module.rules.push({
      test: /\.css$/,
      loaders: [
        {
          loader: 'postcss-loader',
          options: {
            sourceMap: true,
            config: {
              path: './.storybook/',
            },
          },
        },
      ],

      include: path.resolve(__dirname, '../storybook/'),
    });

    return config;
  },
};
