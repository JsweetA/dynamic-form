// 导入依赖
import terser from "@rollup/plugin-terser";
import commonjs from "@rollup/plugin-commonjs";
import ts from "rollup-plugin-typescript2";
import { nodeResolve } from "@rollup/plugin-node-resolve";
import vuePlugin from "rollup-plugin-vue";
// tsconfig.json合并选项
// 一般来说默认使用项目的tsconfig.json，如果有个别需要修改的如下，可以在此修改

/**
 * @type {import('rollup').RollupOptions}
 */
const config = {
  // 项目入口
  input: "./index.js",
  // 打包后的出口和设置
  output: {
    file: "dist/index.js",
    format: "umd",
    name: "form_component",
    globals: {
      vue: "Vue",
    },
  },

  // 使用的插件
  // 注意，这里的插件使用是有顺序的，先把ts编译为js，然后查找依赖，最后压缩
  plugins: [ts({}), nodeResolve(), vuePlugin(), commonjs(), terser()],
  external: ["vue"], // 依赖模块
};

export default config;
