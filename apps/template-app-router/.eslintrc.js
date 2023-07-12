const prettierOptions = require('./.prettierrc.js');

module.exports = {
  root: true,
  extends: ['custom', 'prettier'],
  plugins: ['prettier'],
  rules: {
    'prettier/prettier': ['warn', prettierOptions],
  },
};
