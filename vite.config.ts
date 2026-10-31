import tailwindcss from "@tailwindcss/vite";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import viteReact from "@vitejs/plugin-react";
import { nitro } from "nitro/vite";
import { defineConfig } from "vite";
export default defineConfig({
	define: {
		"import.meta.env.VERCEL_ENV": JSON.stringify(process.env.VERCEL_ENV ?? ""),
	},
	resolve: { tsconfigPaths: true },
	plugins: [tailwindcss(), tanstackStart(), nitro(), viteReact()],
});
