module.exports = {
  core: {
    builder: "webpack5",
  },
  stories: ["../src/components/*.stories.js"],
  addons: ["@storybook/addon-links", "@storybook/addon-essentials"],
  features: {
    storyStoreV7: true,
  },
};
