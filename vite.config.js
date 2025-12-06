// vite.config.js

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  define: {
    // This line injects a global definition for 'process.env.NODE_ENV'
    // It reads the environment variable provided by Vite (import.meta.env.MODE)
    'process.env.NODE_ENV': JSON.stringify(import.meta.env.MODE || 'development'),
  },
});