const path = require('path')
const toPath = targetPath => path.join(process.cwd(), targetPath)

module.exports = {
  core: {
    builder: 'webpack5',
  },
  reactOptions: {
    fastRefresh: true,
    strictMode: true,
  },
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials'],
  babel: async options => ({
    ...options,
    presets: [
      ['react-app', { flow: false, typescript: true }],
      ['@babel/preset-react', { runtime: 'automatic', importSource: '@emotion/react' }],
    ],
    plugins: ['@emotion/babel-plugin'],
  }),
  webpackFinal: async config => ({
    ...config,
    resolve: {
      ...config.resolve,
      alias: {
        ...config.resolve.alias,
        '@emotion/core': toPath('node_modules/@emotion/react'),
      },
    },
  }),
}
