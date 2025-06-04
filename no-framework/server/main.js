// this will patch all subsequent requires
const reactServerRegister = require("react-server-dom-webpack/node-register");
reactServerRegister();

const babelRegister = require("@babel/register");
babelRegister({
  ignore: [/[\\\/](dist|server|node_modules)[\\\/]/],
  plugins: ["@babel/transform-modules-commonjs"],
});

// the patches cannot be on ./server
// you cannot patch it and immediately use it
require("./server")();
