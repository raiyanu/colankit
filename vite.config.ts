import { dirname, resolve } from "path";
import { fileURLToPath } from "url";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";

const __dirname = dirname(fileURLToPath(import.meta.url));

// https://vite.dev/config/
export default defineConfig({
	plugins: [react(), tsconfigPaths()],
	build: {
		lib: {
			entry: resolve(__dirname, "package/colankit/index.tsx"),
			name: "colankit",
			// the proper extensions will be added
			fileName: "colankit",
		},
		rollupOptions: {
			// make sure to externalize deps that shouldn't be bundled
			// into your library
			external: ["react", "react-dom", "react/jsx-runtime"],
			output: {
				// Provide global variables to use in the UMD build
				// for externalized deps
				globals: {
					react: "React",
					"react-dom": "ReactDOM",
					"react/jsx-runtime": "react/jsx-runtime",
				},
			},
		},
	},
});
