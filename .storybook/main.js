const path = require('path');

const resolvePath = (_path) => path.join(process.cwd(), _path);

module.exports = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials'],
  webpackFinal: async (config) => ({
    ...config,
    resolve: {
      ...config.resolve,
      alias: {
        ...config.resolve.alias,
        '@emotion/styled': resolvePath('node_modules/@emotion/styled'),
        '@components': resolvePath('src/components'),
        '@hooks': resolvePath('src/hooks'),
        '@pages': resolvePath('src/pages'),
        '@stories': resolvePath('src/stories'),
        '@assets': resolvePath('src/assets'),
        '@utils': resolvePath('src/utils'),
        '@apis': resolvePath('src/apis'),
      },
    },
  }),
};
