// vite.config.js

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// 💡 Change this from a simple object to a function
export default defineConfig(({ mode }) => {
  // Now, 'mode' is correctly defined inside this function scope
  
  // The value of mode will be 'development', 'production', etc.
  const envMode = mode || 'development'; 

  return {
    plugins: [react()],
    define: {
      // 💡 Use the 'mode' variable provided by the function argument
      // Vite uses 'mode' for the environment name
      'process.env.NODE_ENV': JSON.stringify(envMode),
      
      // OPTIONAL: If the library expects the variable to be available as process.env.MODE
      // 'process.env.MODE': JSON.stringify(envMode),
    },
  };
});