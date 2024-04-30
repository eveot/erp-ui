import react from '@vitejs/plugin-react';
import * as path from 'path';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), dts({ insertTypesEntry: true, exclude: ['**/*.stories.tsx', '**/*.stories.ts'] })],
  build: {
    lib: {
      name: '@eveot/ui',
      entry: path.resolve(__dirname, './src/index.ts'),
      formats: ['es'],
      fileName: 'index',
    },
    rollupOptions: {
      external: ['react', 'react-dom', 'react-icons', 'react-icons/tb', '@tabler/icons-react'],
      output: {
          minifyInternalExports: true
      }
    },
    minify: 'terser',
    cssMinify: 'lightningcss',
  },
  server: {
    fs: {
      cachedChecks: false
    }
  },
  resolve: {
    alias: {
      '@components': path.resolve(__dirname, './src/components'),
      '@legacycomponents': path.resolve(__dirname, './src/legacycomponents'),
      '@assets': path.resolve(__dirname, './src/assets'),
      '@utils': path.resolve(__dirname, './src/utils'),
      '@hooks': path.resolve(__dirname, './src/hooks'),
    }
  },
})
