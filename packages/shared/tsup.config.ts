import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['src/shared.ts'],
  clean: true,
  dts: true,
  format: ['esm', 'cjs'],
});
