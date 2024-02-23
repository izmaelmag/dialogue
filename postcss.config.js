module.exports = {
  plugins: [
    require('autoprefixer'),
    require('postcss-nested'),
    require('cssnano')({
      preset: 'default',
    }),
    require('postcss-import'),
    require('postcss-color-mod-function')({})
  ],
};