import { defineConfig, loadEnv } from "vite";
import vue from "@vitejs/plugin-vue";
import { resolve } from "path";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
    loadEnv(mode, process.cwd());
    return {
        plugins: [vue()],
        resolve: {
            alias: {
                "@": resolve(__dirname, "src"),
            },
        },
    };
});
