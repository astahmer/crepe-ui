import { defaultConfig } from '@crepe-ui/shared'
import { defineConfig } from '@pandacss/dev'

// This panda/config only exists to generate the lightweight `outdir` (styled-system) JS runtime
// It's what transforms a style object into a className.
// ex: `{ color: "red.300" }` => `text_red_300`

export default defineConfig({
	presets: defaultConfig.presets,
	// prefix: defaultConfig.prefix,
	// cssVarRoot: defaultConfig.cssVarRoot,
	// staticCss: defaultConfig.staticCss,

	// Whether to use css reset
	preflight: false,

	// Where to look for your css declarations
	// Since we don't care about the CSS generation here, we can skip including any files
	include: ['demo/**/*'],

	// The output directory for your css system
	// using the same `@crepe-ui/styled-system` acrosss all packages
	// and by marking it as `external` in the `tsup.config.ts`
	// will make all packages use the same `styled-system` runtime
	importMap: '@crepe-ui/styled-system',

	// The JSX framework to use
	jsxFramework: 'react',
})
