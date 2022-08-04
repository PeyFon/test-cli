module.exports = {
  presets: ["@vue/cli-plugin-babel/preset"],
  plugins: [
    // [
    //   "import",
    //   {
    //     libraryName: "@icon-park/vue-next",
    //     libraryDirectory: "es/icons",
    //     camel2DashComponentName: false,
    //   },
    // ],
  ],
  env: {
    production: {
      plugins: ["transform-remove-console"]
    }
  }
};
