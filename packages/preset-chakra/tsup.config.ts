import { defineConfig } from 'tsup'

export default defineConfig({
  entry: ['src/preset.ts', 'src/vars.ts'],
  clean: true,
  dts: true,
  format: ['esm', 'cjs'],
})
