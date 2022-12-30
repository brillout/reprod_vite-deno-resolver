import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import ssr from "vite-plugin-ssr/plugin";
import denoResolve from "vite_plugin_deno_resolve";

export default defineConfig({
  plugins: [denoResolve(), react(), ssr()],
});
