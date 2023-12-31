module.exports = {
  extends: ['airbnb-base', 'prettier'],
  plugins: ['prettier'],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },
  rules: {
    'prettier/prettier': ['error'],
    'no-underscore-dangle': ['error', { allow: ['_id'] }],
    'no-restricted-syntax': ['error', 'ForInStatement', 'LabeledStatement', 'WithStatement'],
    'no-continue': 0,
  },
  settings: {
    'import/resolver': {
      node: {
        paths: ['src'],
      },
    },
  },
};
