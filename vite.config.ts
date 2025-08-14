// vite.config.ts
import { resolve } from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import dts from 'vite-plugin-dts';

export default defineConfig({
  plugins: [
    react(),
    dts({
      insertTypesEntry: true,
    }),
  ],
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'BodewellUI', 
      fileName: (format) => `bodewell-ui.${format}.js`, 
    },
    rollupOptions: {
      // Add 'react-dom/server' to the external array
      external: [
        'react', 
        'react-dom', 
        'tailwindcss', 
        'react/jsx-runtime', 
        'react-dom/server'
      ],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
        },
      },
    },
  },
});