import { dirname, resolve } from "path";
import { fileURLToPath } from "url";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";
import { libInjectCss } from "vite-plugin-lib-inject-css";
import dts from "vite-plugin-dts";

const __dirname = dirname(fileURLToPath(import.meta.url));

export default defineConfig({
	plugins: [
		react(),
		tsconfigPaths(),
		libInjectCss(),
		dts({ rollupTypes: true, tsconfigPath: "./tsconfig.json" }),
	],
	build: {
		lib: {
			entry: resolve(__dirname, "package/colankit/index.tsx"),
			name: "colankit",
			fileName: "colankit",
		},
		rollupOptions: {
			external: ["react", "react-dom", "react/jsx-runtime"],
			output: {
				globals: {
					react: "React",
					"react-dom": "ReactDOM",
					"react/jsx-runtime": "react/jsx-runtime",
				},
			},
		},
	},
});
