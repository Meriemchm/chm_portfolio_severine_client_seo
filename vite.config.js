import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import { compression } from 'vite-plugin-compression2';
import { purgeCss } from 'vite-plugin-tailwind-purgecss';
import cleanPlugin from 'vite-plugin-clean';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [  
    react(),    
    compression(),
    compression({ algorithm: 'brotliCompress' }),
    purgeCss(), 
    cleanPlugin()],
  build: {
    chunkSizeWarningLimit: 1000, 
    minify: 'terser', 
    cssMinify: 'cssnano',
  },
})
