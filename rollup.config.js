const alias = require("@rollup/plugin-alias");
const buble = require("@rollup/plugin-buble");

module.exports = [
  {
    input: "src/index.js",
    output: {
      file: "dist/index.esm.js",
      exports: "named",
      format: "es",
      globals: {}
    },
    plugins: [buble(), alias({})],
    external: [""]
  },
  {
    input: "src/index.js",
    output: {
      file: "dist/index.js",
      format: "umd",
      exports: "named",
      name: "index",
      globals: {}
    },
    plugins: [buble(), alias({})],
    external: []
  }
];
