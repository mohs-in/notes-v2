import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
  const envMode = mode || 'development'; 

  return {
    plugins: [react()],
    define: {
      'process.env.NODE_ENV': JSON.stringify(envMode),
      
    },
    base: '/notes/'
  };
});
