const path = require("path");

module.exports = function override(config) {
  config.resolve.alias = {
    "@components": path.resolve(__dirname, "src/components"),
    "@constant": path.resolve(__dirname, "src/constant"),
    "@hooks": path.resolve(__dirname, "src/hooks"),
    "@interface": path.resolve(__dirname, "src/interface"),
    "@styles": path.resolve(__dirname, "src/styles"),
    "@utils": path.resolve(__dirname, "src/utils"),
  };
  return config;
};
