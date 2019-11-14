module.exports = {
  "extends": "airbnb-base",
  "env": {
    "node": true,
    "commonjs": true,
    "jest": true,
  },
  "globals": {
    "Atomics": "readonly",
    "SharedArrayBuffer": "readonly"
  },
  "rules": {
    "no-console": 0,
    "arrow-body-style": 0,
  },
};
