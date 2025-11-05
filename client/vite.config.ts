import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  root: 'client', // index.html यहाँ छ
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'client/src'),
      '@assets': path.resolve(__dirname, 'client/assets'),
    },
  },
  build: {
    outDir: path.resolve(__dirname, 'dist/public'), // build output
    emptyOutDir: true,
  },
});
