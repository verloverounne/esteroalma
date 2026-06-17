import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // Ensure assets imported from src/assets/ are hashed and emitted
  assetsInclude: ['**/*.mp4'],
});
