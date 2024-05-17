import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  server: {
    cors: {
      origin: [
        'https://library-staging.princeton.edu/',
        'https://library.princeton.edu/'
      ],
      methods: ['GET', 'HEAD']
    }
  },
  base: 'https://static-tables-staging.princeton.edu/'
});
