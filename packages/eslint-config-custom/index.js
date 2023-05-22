module.exports = {
  extends: ['next/core-web-vitals', 'turbo', 'prettier'],
  rules: {
    'react-hooks/exhaustive-deps': 'off',
    'no-html-link-for-pages': 'off',
  },
  parserOptions: {
    babelOptions: {
      presets: [require.resolve('next/babel')],
    },
  },
};
