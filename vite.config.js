import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/', // Ensure base path is correct
  build: {
    outDir: 'build' // Output directory for the build
  }
});
