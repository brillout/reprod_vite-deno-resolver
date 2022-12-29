import { defineConfig } from 'npm:vite@^4.0.0'
import react from 'npm:@vitejs/plugin-react@^3.0.0'
import ssr from 'npm:vite-plugin-ssr/plugin'
// import denoResolve from 'https://deno.land/x/vite_plugin_deno_resolve/mod.ts';

import 'npm:react@^18.2.0'
import 'npm:react-dom@^18.2.0/client'

export default defineConfig({
  plugins: [react(), ssr()
    // , denoResolve()
  ]
})
