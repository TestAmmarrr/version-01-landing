module.exports = {
  root: true,
  globals: { fetch: false },
  extends: [
    'eslint:recommended',
    'plugin:prettier/recommended',
    'plugin:tailwindcss/recommended',
    'plugin:react/recommended',
  ],
  env: {
    browser: true,
    es2021: true,
    jest: true,
    node: true,
  },
  rules: {
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    'react/jsx-no-bind': [1, { allowBind: true, allowArrowFunctions: true }],
    'no-plusplus': 'off',
    'react/forbid-prop-types': 'off',
    'no-use-before-define': ['error', { variables: false }],
    'no-param-reassign': 'off',
    'prettier/prettier': ['error', { endOfLine: 'auto' }],
    'no-mixed-operators': 'off',
    'react/jsx-props-no-spreading': 'off',
  },
  parserOptions: {
    ecmaVersion: 2021,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  plugins: ['tailwindcss', 'react'],
};
