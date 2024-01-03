import { defaultConfig } from '@crepe-ui/shared'
import { defineConfig } from '@pandacss/dev'

// This panda/config only exists to generate the recipes variants staticCSS
export default defineConfig({
	// prefix: defaultConfig.prefix,
	// cssVarRoot: defaultConfig.cssVarRoot,
	presets: defaultConfig.presets,
	preflight: false,
	staticCss: defaultConfig.staticCss,
})
