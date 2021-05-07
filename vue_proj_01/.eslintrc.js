module.exports = {
  root: true,

  env: {
    node: true
  },

  extends: [
    'plugin:vue/essential',
    '@vue/standard'
  ],

  parserOptions: {
    parser: 'babel-eslint'
  },

  rules: {
    'no-console': 'off',
    'no-debugger': 'off',
    'no-irregular-whitespace': 'off',
    indent: ['off', 2],
    'space-before-function-paren': 0,
    'key-spacing': 0,
    'space-before-blocks': 0
  },

  'extends': [
    'plugin:vue/essential',
    '@vue/standard'
  ]
}
