import react from '@vitejs/plugin-react';
import { fileURLToPath } from "node:url";
import * as path from 'path';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';

const filesNeedToExclude = ["src/components/Icon/*"];

const filesPathToExclude = filesNeedToExclude.map((src) => {
  return fileURLToPath(new URL(src, import.meta.url));
});

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), dts({ insertTypesEntry: true, exclude: ['**/*.stories.tsx', '**/*.stories.ts'], rollupTypes: true })],
  build: {
    lib: {
      name: '@eveot/ui',
      entry: path.resolve(__dirname, './src/index.ts'),
      formats: ['es'],
      fileName: 'index',
    },
    rollupOptions: {
      external: ['react', 'react-dom', 'react-icons', 'react-icons/tb', '@tabler/icons-react', ...filesPathToExclude],
      output: {
          globals: {
              react: 'React',
          //     'react-dom': 'ReactDOM',
          //     'react-icons': 'IconBaseProps',
          //     'react-icons/tb': 'tbicons'
          },
          minifyInternalExports: true
      }
    },
    minify: 'terser',
    cssMinify: 'esbuild',
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
