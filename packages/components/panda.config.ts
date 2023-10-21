import { defaultConfig } from '@pacha/shared'
import { defineConfig } from '@pandacss/dev'

// This panda/config only exists to generate the lightweight `outdir` (styled-system) JS runtime
// It's what transforms a style object into a className.
// ex: `{ color: "red.300" }` => `text_red_300`

export default defineConfig({
  // prefix: defaultConfig.prefix,
  // cssVarRoot: defaultConfig.cssVarRoot,
  presets: defaultConfig.presets,
  // Whether to use css reset
  preflight: false,

  // Where to look for your css declarations
  // Since we don't care about the CSS generation here, we can skip including any files
  include: ['demo/**/*'],

  // Files to exclude
  exclude: [],

  // The output directory for your css system
  // using the same `@pacha/styled-system` acrosss all packages
  // and by marking it as `external` in the `tsup.config.ts`
  // will make all packages use the same `styled-system` runtime
  outdir: '../styled-system/styled-system',
  importMap: {
    css: '@pacha/styled-system',
    patterns: '@pacha/styled-system',
    recipes: '@pacha/styled-system',
    jsx: '@pacha/styled-system',
  },

  // The JSX framework to use
  jsxFramework: 'react',
})
