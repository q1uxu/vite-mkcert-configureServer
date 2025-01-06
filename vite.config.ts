import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import mkcert from "vite-plugin-mkcert";
import expressApp from "./server";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    mkcert(),
    {
      name: "vite-plugin-express",
      configureServer(server) {
        server.middlewares.use(expressApp);
      },
    },
  ],
});
