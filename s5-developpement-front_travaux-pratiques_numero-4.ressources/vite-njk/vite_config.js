import nunjucks from "@vituum/vite-plugin-nunjucks";
import vituum from "vituum";
import { defineConfig, loadEnv } from 'vite';

export default defineConfig(({ mode }) => {
    // Charge toutes les variables d'environnement de votre fichier .env
    const env = loadEnv(mode, process.cwd(), '');

    return {
        base: "./",
        css: {
            // Displays the source of sass files in dev
            devSourcemap: true,
        },
        plugins: [
            vituum({
                pages: {
                    normalizeBasePath: true,
                },
            }),
            nunjucks({
                // Where the nunjucks files are located
                root: "./src",
            }),
        ],
        server: {
            // Utilise la variable d'environnement SERVER_PORT, ou 9117 par défaut
            port: env.SERVER_PORT ? parseInt(env.SERVER_PORT) : 9117,
            // Expose the server to the network allowing access from ip address
            host: true,
            open: true,
        },
    };
});