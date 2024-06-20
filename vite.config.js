import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
// import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
    // root: __dirname,
    plugins: [react()],
    // resolve: {
    //     alias: {
    //         "@": path.resolve(__dirname, "src"),
    //         "@layouts": path.resolve(__dirname, "src/layouts"),
    //         "@icons": path.resolve(__dirname, "src/assets/icons"),
    //         "@pages": path.resolve(__dirname, "src/pages"),
    //         // Add more aliases as needed
    //     },
    // },
});
