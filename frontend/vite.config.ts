import { defineConfig } from 'vite';
import path from 'path';
import svgr from 'vite-plugin-svgr';
import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import { TanStackRouterVite } from '@tanstack/router-plugin/vite';

export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@routes/home': path.resolve(__dirname, './src/routes/(home)'),
      '@routes/product-request': path.resolve(
        __dirname,
        './src/routes/(product-request)'
      )
    }
  },
  plugins: [
    TanStackRouterVite({ target: 'react', autoCodeSplitting: true }),
    tailwindcss(),
    svgr(),
    react()
  ]
});
