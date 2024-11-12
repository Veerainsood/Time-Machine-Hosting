import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
//hi
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: process.env.PORT || 5173,  // Use the port from the environment variable if available
    host: true                      // This exposes your app to the network, not just localhost
    
  },
  build: {
    assetsInlineLimit: 100000000, // Set limit to 1MB or higher for larger assets
  },
})

