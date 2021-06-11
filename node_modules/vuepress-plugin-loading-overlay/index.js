const { resolve } = require("path");

module.exports = (options, context) => {
  return {
    clientRootMixin: resolve(__dirname, "clientRootMixin.js"),
    define: {
      TIMEOUT: options.timeout || 500,
      options: {
        active: !!options.active,
        canCancel: !!options.canCancel,
        onCancel: options.onCancel || (() => {}),
        isFullPage: options.isFullPage !== false,
        transition: options.transition || "fade",
        color: options.color || "#000",
        height: options.height,
        width: options.width,
        loader: options.loader || "spinner",
        backgroundColor: options.backgroundColor || "#fff",
        opacity: options.opacity || 0.5,
        zIndex: options.zIndex || 9999,
        enforceFocus: options.enforceFocus !== false,
        lockScroll: !!options.lockScroll,
        blur: options.blur || "2px",
      },
    },
    enhanceAppFiles: resolve(__dirname, "enhanceAppFile.js"),
  };
};
