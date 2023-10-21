import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['src/color-mode.ts'],
  clean: true,
  dts: true,
  format: ['esm', 'cjs'],
});
