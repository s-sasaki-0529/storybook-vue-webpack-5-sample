module.exports = (api) => {
  api.cache(true);
  return {
    presets: [
      [
        "@babel/preset-env",
        {
          modules: false,
          useBuiltIns: "entry",
          corejs: {
            version: 3,
            proposals: false,
          },
        },
      ],
    ],
    plugins: ["@babel/plugin-transform-runtime"],
  };
};
