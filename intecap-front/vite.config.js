import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), ''); // Load environment variables

  return {
    define: {
      'process.env': env, // Expose loaded environment variables as process.env
    },
    plugins: [react()],
    server: {
      proxy: {
        '/api': 'http://localhost:4000'
      }
    }
  };
});
