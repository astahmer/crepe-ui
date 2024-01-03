import { defaultConfig } from '@crepe-ui/preset-chakra'
import { defineConfig } from '@pandacss/dev'

// This panda/config only exists to generate the recipes variants staticCSS
export default defineConfig({
	preflight: false,
	presets: defaultConfig.presets,
	staticCss: defaultConfig.staticCss,
})
