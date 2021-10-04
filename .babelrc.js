module.exports = {
  presets: ['next/babel', ['@babel/env', { targets: { node: 5 } }]],
  plugins: [
    ['@babel/plugin-transform-runtime'],
    ['@babel/plugin-transform-spread'],
    ["@babel/plugin-proposal-class-properties"],
    ['@babel/plugin-transform-arrow-functions', { spec: false }],
    ['styled-components', { ssr: true, displayName: true, preprocess: false }],
    'lodash'
  ],
  env: {
    production: {
      // "plugins": ["transform-remove-console"]
    },
    test: {
      presets: [
        [
          '@babel/preset-env',
          {
            modules: 'commonjs',
            debug: false
          }
        ],
        '@babel/preset-flow',
        '@babel/preset-react'
      ],
      plugins: [
        '@babel/plugin-syntax-dynamic-import',
        '@babel/plugin-proposal-class-properties'
      ]
    }
  },
  minified: true,
  comments: false,
  sourceMaps: true
};
