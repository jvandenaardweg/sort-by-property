import { defineConfig } from 'rollup';
import typescript from '@rollup/plugin-typescript';

export default defineConfig({
  input: 'src/sort-by.ts',
  output: {
    dir: 'dist',
    format: 'commonjs',
  },
  plugins: [typescript()],
});
