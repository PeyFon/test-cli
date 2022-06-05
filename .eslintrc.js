module.exports = {
  root: true,
  env: {
    node: true,
    "vue/setup-compiler-macros": true
  },
  overrides: [
    {
      files: ["src/views/**/*.vue"],
      rules: {
        "vue/multi-word-component-names": 0
      }
    }
  ],
  extends: [
    "plugin:vue/vue3-essential",
    "eslint:recommended",
    "@vue/typescript/recommended",
    "plugin:prettier/recommended",
    "./.eslintrc-auto-import.json" //不能删
  ],
  parserOptions: {
    ecmaVersion: 2020
  },
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
    "import/prefer-default-export": "off",
    "vue/multi-word-component-names": "off", //不能删
    "@typescript-eslint/no-var-requires": 0, //不能删
    "linebreak-style": [0, "error", "windows"]
  },
  globals: {
    defineOptions: true
  }
};
