import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  server: {
    cors: false
  },
  base: process.env.VITE_STATIC_TABLES_BASE_PATH
});
