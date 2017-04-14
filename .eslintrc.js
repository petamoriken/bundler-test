module.exports = {
  // To give you an idea how to override rule options:
  parser: "babel-eslint",
  extends: ["eslint:recommended"],
  env: {
    "browser": true,
    "node": true
  },
  globals: {
    Symbol: false,
    Proxy: false,
    Reflect: false,
    ArrayBuffer: false,
    Uint16Array: false,
    Uint32Array: false,
    Float32Array: false
  },
  rules: {
    "quotes": [2, "double", "avoid-escape"],
    "no-console": [0],
    "no-unused-vars": [1, {"vars": "all", "args": "after-used"}],
    "no-return-await": [1],
    "eol-last": [0],
    "no-mixed-requires": [0],
    "no-underscore-dangle": [0]
  }
};