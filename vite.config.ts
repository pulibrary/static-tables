import { defineConfig, loadEnv } from 'vite';
import vue from '@vitejs/plugin-vue';

// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {
  const env = loadEnv(mode, process.cwd(), '');

  return {
    plugins: [vue()],
    server: {
      cors: false
    },
    test: {
      coverage: {
        include: ['app/**/*.js', 'app/**/*.ts', 'app/**/*.vue']
      }
    },
    base: env.VITE_STATIC_TABLES_BASE_PATH
  };
});
