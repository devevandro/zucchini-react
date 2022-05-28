const withImages = require('next-images');

module.exports = withImages({
  esModule: true,
  inlineImageLimit: false,
  images: {
    disableStaticImages: true,
    formats: ['image/avif', 'image/webp'],
  },
});
