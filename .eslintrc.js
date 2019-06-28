module.exports = {
  env: {
    es6: true,
    node: true,
  },
  extends: 'airbnb-base',
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  rules: {
    "indent": [
      "error",
      "space"
  ],
  "linebreak-style": [
      "error",
      "unix"
  ],
  "quotes": [
      "error",
      "double"
  ],
  "semi": [
      "error",
      "always"
  ]
  },
  'extends': 'eslint:recommended'
};
