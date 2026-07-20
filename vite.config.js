import { defineConfig } from "vite";
import { resolve } from "path";

export default defineConfig({
	base: "/2Q_fainal/",
	build: {
		rollupOptions: {
			input: {
				main: resolve(__dirname, "index.html"),
				app: resolve(__dirname, "app.html"),
			},
		},
	},
});