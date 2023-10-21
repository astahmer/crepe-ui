import { defaultConfig } from '@pacha/shared'
import { defineConfig } from '@pandacss/dev'

// This panda/config only exists to generate the recipes variants staticCSS
export default defineConfig({
  // prefix: defaultConfig.prefix,
  // cssVarRoot: defaultConfig.cssVarRoot,
  presets: defaultConfig.presets,
  // Whether to use css reset
  preflight: false,

  conditions: {
    extend: {
      dark: '.dark &, [data-theme="dark"] &',
      light: '.light &, [data-theme="light"] &',
    },
  },
  staticCss: defaultConfig.staticCss,
})
