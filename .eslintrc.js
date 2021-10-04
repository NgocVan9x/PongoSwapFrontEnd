module.exports = {
  root: true,
  env: {
    browser: true,
    es6: true,
    node: true,
    jest: true
  },
  extends: ['prettier', 'eslint:recommended', 'plugin:react/recommended'],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly'
  },
  parser: 'babel-eslint',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
      modules: true
    },
    ecmaVersion: 2018,
    sourceType: 'module'
  },
  plugins: ['react', 'prettier'],
  rules: {
    'prettier/prettier': 'error',
    indent: 'off',
    'linebreak-style': ['error', 'unix'],
    quotes: ['error', 'single'],
    semi: ['error', 'always'],
    'no-console': 'off',
    'react/prop-types': 0,
    'react/jsx-no-target-blank': [
      2,
      { allowReferrer: true, enforceDynamicLinks: 'never' }
    ]
  }
};
