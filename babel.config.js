module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          root: ['.'],
          alias: {
            '@routes': './routes/',
            '@components': './components/',
            '@api': './api/',
            '@hooks': './hooks/',
            '@screens': './screens/',
            '@recoil': './recoil/',
            '@styles': './styles/',
            '@images': './assets/images/',
            '@utils': './utils/',
          },
        },
      ],
    ],
  };
};
