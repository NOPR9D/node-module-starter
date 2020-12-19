const alias = require("@rollup/plugin-alias");
const buble = require("@rollup/plugin-buble");

module.exports = [
  {
    input: "src/index.js",
    output: {
      file: "dist/File.esm.js",
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
      file: "dist/File.js",
      format: "umd",
      exports: "named",
      name: "Name",
      globals: {}
    },
    plugins: [buble(), alias({})],
    external: []
  }
];
