import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // The assets folder at the repo root is our public directory
  publicDir: 'assets',
});
