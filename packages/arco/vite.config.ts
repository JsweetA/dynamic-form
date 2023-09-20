import { defineConfig } from "vite";
import { resolve } from "path";
import vue from "@vitejs/plugin-vue";
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import { ArcoResolver } from "unplugin-vue-components/resolvers";
import { vitePluginForArco } from "@arco-plugins/vite-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";

export default defineConfig({
	resolve: {
		alias: {
			"@": resolve(__dirname, "./src"), //名字替代
			// remove i18n waring
		},
	},
	plugins: [
		vue(),
		vueJsx(),
		AutoImport({
			resolvers: [ArcoResolver()],
		}),
		Components({
			resolvers: [
				ArcoResolver({
					sideEffect: true,
				}),
			],
		}),
		vitePluginForArco({
			style: "css",
		}),
	],
	build: {
		lib: {
			// Could also be a dictionary or array of multiple entry points
			entry: resolve(__dirname, "./src/index.ts"),
			name: "Hy-form",
			// the proper extensions will be added
			fileName: "Hy-form",
		},
		rollupOptions: {
			// 确保外部化处理那些你不想打包进库的依赖
			external: ["vue"],
			output: {
				// 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
				globals: {
					vue: "Vue",
				},
			},
		},
	},
	css: {
		// 如果提供了该内联配置，Vite 将不会搜索其他 PostCSS 配置源
		postcss: {
			plugins: [
				{
					postcssPlugin: "internal:charset-removal",
					AtRule: {
						charset: (atRule) => {
							if (atRule.name === "charset") {
								atRule.remove();
							}
						},
					},
				},
			],
		},
	},
	server: {
		open: "./examples/web-demo/index.html",
	},
});
