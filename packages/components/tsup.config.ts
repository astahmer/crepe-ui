import { defineConfig } from 'tsup'

export default defineConfig({
  entry: ['src/components.ts'],
  clean: true,
  dts: true,
  format: ['esm', 'cjs'],
  external: ['@pacha/styled-system', 'react', 'react-dom', '@ark-ui/react'],
})
