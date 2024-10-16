import react from '@vitejs/plugin-react-swc';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    preprocessorOptions: {
      scss: {
        api: 'modern-compiler',
      },
    },
    devSourcemap: true,
  },
  resolve: {
    alias: {
      '@components': '/src/components',
      '@assets': '/src/assets',
      '@styles': '/src/styles',
    },
  },
});
