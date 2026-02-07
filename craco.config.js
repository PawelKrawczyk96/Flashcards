const path = require("path");

module.exports = {
  webpack: {
    alias: {
      "@components": path.resolve(__dirname, "src/components"),
      "@consts": path.resolve(__dirname, "src/consts"),
      "@hooks": path.resolve(__dirname, "src/hooks"),
      "@interfaces": path.resolve(__dirname, "src/interfaces"),
      "@pages": path.resolve(__dirname, "src/pages"),
      "@services": path.resolve(__dirname, "src/services"),
      "@utils": path.resolve(__dirname, "src/utils"),
      "@layouts": path.resolve(__dirname, "src/layouts"),
      "@modals": path.resolve(__dirname, "src/modals"),
    },
  },
};
