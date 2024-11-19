// https://docs.expo.dev/guides/using-eslint/
module.exports = {
  extends: ["expo", "prettier"],
  plugin: ["prettier"],
  rules: {
    "prettier/prettier": "warn",
  },
  ignorePatterns: ["/dist/*"],
};
