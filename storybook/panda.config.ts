import { defaultConfig } from '@crepe-ui/preset-chakra'
import { defineConfig } from '@pandacss/dev'

export default defineConfig({
	presets: defaultConfig.presets,
	// staticCss: defaultConfig.staticCss,
	preflight: false,
	include: ['./stories/**/*.{js,jsx,ts,tsx}'],
	outdir: 'styled-system',
	importMap: '@crepe-ui/styled-system',
	jsxFramework: 'react',

	// This will override the @crepe-ui/styled-system token class generation
	theme: {
		extend: {
			tokens: {
				colors: {
					red: {
						300: {
							value: 'yellow',
						},
					},
				},
			},
		},
	},
})
