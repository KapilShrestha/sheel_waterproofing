import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
    build: {
        outDir: './dist', // Specify the output directory
        assetsDir: './src/assets', // Assets folder is the root
        rollupOptions: {
            input: {
                main: resolve(__dirname, 'index.html'), // Entry point of your application
                "index_content": resolve(__dirname, "./pages/index_content.html"),
                "vista_afa_super": resolve(__dirname, "./pages/vista_afa_super.html"),
                "vista_iwa": resolve(__dirname, "./pages/vista_iwa.html"),
                "vista_no_2": resolve(__dirname, "./pages/vista_no_2.html"),
                "vista_no_3": resolve(__dirname, "./pages/vista_no_3.html"),
                "vista_power_silica_fume": resolve(__dirname, "./pages/vista_power_silica_fume.html"),
                "vista_sbr_latex_plus": resolve(__dirname, "./pages/vista_sbr_latex_plus.html"),
                "vista_superplast_hs": resolve(__dirname, "./pages/vista_superplast_hs.html")
            },
        },
        emptyOutDir: true, // Clear the output directory before building
    },
    optimizeDeps: {
        include: ['@vue/runtime-core', 'vue-router'], // Add any dependencies here
    },
    root: './', // Specify the root directory for resolving input and output paths
    publicDir: './public',
    server: {
        open: true, // Automatically open the browser when the server starts
    },
});
