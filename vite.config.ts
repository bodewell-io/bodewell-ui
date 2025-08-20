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
      // RECOMMENDED: Add the formats to ensure both module types are built.
      // This is the most important change.
      formats: ['es', 'umd'],
      // RECOMMENDED: A more conventional naming for the output files.
      fileName: (format) => `index.${format}.js`,
    },
    rollupOptions: {
      // RECOMMENDED: We can simplify the external array.
      // react/jsx-runtime is handled automatically.
      external: ['react', 'react-dom', 'tailwindcss'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
          tailwindcss: 'tailwindcss',
        },
      },
    },
  },
});