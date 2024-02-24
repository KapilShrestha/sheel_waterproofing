import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
    base: './',
    build: {
        outDir: './dist', // Specify the output directory
        assetsDir: './src/assets', // Assets folder is the root
        rollupOptions: {
            input: {
                main: resolve(__dirname, 'index.html'), // Entry point of your application
                "bituminous_waterproofing_membrane": resolve(__dirname, "./pages/bituminous_waterproofing_membrane.html"),
                "cementitious_waterproofing": resolve(__dirname, "./pages/cementitious_waterproofing.html"),
                "index_content": resolve(__dirname, "./pages/index_content.html"),
                "injection_waterproofing": resolve(__dirname, "./pages/injection_waterproofing.html"),
                "liquid_waterproofing_membrane": resolve(__dirname, "./pages/liquid_waterproofing_membrane.html"),
                "polyurethane_waterproofing": resolve(__dirname, "./pages/polyurethane_waterproofing.html"),
                "products": resolve(__dirname, "./pages/products.html"),
                "roof_waterproofing": resolve(__dirname, "./pages/roof_waterproofing.html"),
                "vista_afa_super": resolve(__dirname, "./pages/vista_afa_super.html"),
                "vista_crystal_plus": resolve(__dirname, "./pages/vista_crystal_plus.html"),
                "vista_flex_seal_plus": resolve(__dirname, "./pages/vista_flex_seal_plus.html"),
                "vista_iwa": resolve(__dirname, "./pages/vista_iwa.html"),
                "vista_no_2": resolve(__dirname, "./pages/vista_no_2.html"),
                "vista_no_3": resolve(__dirname, "./pages/vista_no_3.html"),
                "vista_power_silica_fume": resolve(__dirname, "./pages/vista_power_silica_fume.html"),
                "vista_sbr_latex_plus": resolve(__dirname, "./pages/vista_sbr_latex_plus.html"),
                "vista_shot_x": resolve(__dirname, "./pages/vista_shot_x.html"),
                "vista_super_crete": resolve(__dirname, "./pages/vista_super_crete.html"),
                "vista_superplast_hs": resolve(__dirname, "./pages/vista_superplast_hs.html"),
                "vista_superplast_hs_1000": resolve(__dirname, "./pages/vista_superplast_hs_1000.html"),
                
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
