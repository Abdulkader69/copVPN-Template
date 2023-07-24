const { resolve } = require('path');
export default {
  plugins: [],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        another: resolve(__dirname, 'single.html'),
        refer: resolve(__dirname, 'refer-friends.html'),
        servers: resolve(__dirname, 'servers.html'),
        features: resolve(__dirname, 'features.html'),
        pricing: resolve(__dirname, 'pricing.html'),
      },
    },
  },
};
