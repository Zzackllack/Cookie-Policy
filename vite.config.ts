import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/cookies/',
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});