// 导入依赖
import terser from "@rollup/plugin-terser";
import commonjs from "@rollup/plugin-commonjs";
import ts from "rollup-plugin-typescript2";

// tsconfig.json合并选项
// 一般来说默认使用项目的tsconfig.json，如果有个别需要修改的如下，可以在此修改

/**
 * @type {import('rollup').RollupOptions}
 */
const config = {
  // 项目入口
  input: "src/index.ts",
  // 打包后的出口和设置
  output: [
    {
      file: "./dist/bundle.js",
      format: "cjs",
    },
    {
      file: "./dist/bundle.es.js",
      format: "es",
    },
    {
      file: "./dist/bundle.umd.js",
      name: "utils",
      format: "umd",
    },
    // {
    //   file: "./dist/bundle.min.js",
    //   format: "iife",
    //   name: "version",
    //   plugins: [],
    // },
  ],

  // 使用的插件
  // 注意，这里的插件使用是有顺序的，先把ts编译为js，然后查找依赖，最后压缩
  plugins: [ts({}), , commonjs(), terser()],
};

export default config;
