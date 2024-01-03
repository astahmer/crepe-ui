import { defaultConfig } from '@crepe-ui/preset-chakra'
import { defineConfig } from '@pandacss/dev'

// This panda config is only used for the vite dev server, not for the component library itself
export default defineConfig({
	presets: defaultConfig.presets,
	preflight: false,
	include: ['demo/**/*'],
	importMap: '@crepe-ui/styled-system',
	jsxFramework: 'react',
})
