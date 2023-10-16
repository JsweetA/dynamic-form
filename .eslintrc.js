module.exports = {
  // 限定在根目录下搜索
  root: true,
  // 默认情况eslint内置的解析器是对于标准JavaScript运行时的版本兼容，而代码中有一些ts，需要将ts解析成eslint能识别的AST
  parser: "@typescript-eslint/parser",
  // 小众规则（eslint内置推荐的）
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    // 放到最后保证prettier规则覆盖eslint规则
    "prettier",
  ],
  plugins: ["@typescript-eslint", "prettier"],
  rules: {
    "@typescript-eslint/no-explicit-any": ["off"],

    // 关闭一些规则防止eslint和prettier发生冲突
    "prettier/prettier": "error",
    "arrow-body-style": "off",
    "prettier-arrow-callback": "off",
  },
};
