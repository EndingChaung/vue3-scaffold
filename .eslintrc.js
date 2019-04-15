module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/essential',
    '@vue/airbnb',
  ],
  rules: {
    'import/extensions': ['error', 'always', {
      'js': 'never',
      'vue': 'never'
    }],
    // 'linebreak-style': 0,
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-param-reassign': [0],
    'global-require': 0 
  },
  parserOptions: {
    parser: 'babel-eslint',
  },
};
