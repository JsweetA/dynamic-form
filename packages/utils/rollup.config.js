// 导入依赖
import terser from "@rollup/plugin-terser";
import commonjs from "@rollup/plugin-commonjs";
import ts from "rollup-plugin-typescript2";
import { nodeResolve } from "@rollup/plugin-node-resolve";

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
      file: "./dist/bundle.cjs",
      format: "cjs",
    },
    {
      file: "./dist/bundle.es.js",
      format: "es",
    },
    {
      dir: "./dist/chunk",
      name: "utils",
      chunkFileNames: "[name]-[hash].js",
      entryFileNames: "bundle.js",
      format: "es",
      // manualChunks(id, { getModuleInfo }) {
      //   return id.replace(
      //     "F:\\frontDesign\\个人学习\\hy-form\\packages\\utils\\src\\",
      //     "",
      //   );
      // },
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
  plugins: [ts({}), nodeResolve(), commonjs(), terser()],
};

export default config;
