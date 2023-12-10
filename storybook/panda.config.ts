import { defaultConfig } from '@pacha/shared'
import { defineConfig } from '@pandacss/dev'

export default defineConfig({
	presets: defaultConfig.presets,
	// staticCss: defaultConfig.staticCss,
	preflight: false,
	include: ['./stories/**/*.{js,jsx,ts,tsx}'],
	outdir: 'node_modules/@pacha/styled-system/styled-system',
	importMap: '@pacha/styled-system',
	jsxFramework: 'react',

	// This will override the @pacha/styled-system token class generation
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
