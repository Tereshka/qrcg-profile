module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/qrcg-profile/'
    : '/',
  lintOnSave: false,
  runtimeCompiler: true,
};
