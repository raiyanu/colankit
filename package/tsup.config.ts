import { sassPlugin } from "esbuild-sass-plugin";
import { defineConfig } from "tsup";

export default defineConfig({
	entry: [
		"./src/index.ts",
		"./src/components/button/button.ts",
		"./src/main.scss",
	],
	format: ["cjs", "esm"],
	target: ["es2022", "node18"],
	outDir: "dist",
	dts: true,
	sourcemap: true,
	clean: true,
	esbuildPlugins: [
		sassPlugin({
			type: "lit-css",
		}),
	],
});
