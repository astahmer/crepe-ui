import { defaultConfig } from '@crepe-ui/preset-chakra'
import { defineConfig } from '@pandacss/dev'

// This panda/config only exists to generate the lightweight `outdir` (styled-system) JS runtime
// It's what transforms a style object into a className.
// ex: `{ color: "red.300" }` => `text_red_300`

export default defineConfig({
	presets: defaultConfig.presets,

	// Whether to use css reset
	preflight: false,

	outdir: 'dist',
	// using the same module specifier `@crepe-ui/styled-system` acrosss all packages
	// and by marking it as `external` in the `tsup.config.ts`
	// will make all packages use the same `styled-system` runtime
	importMap: '@crepe-ui/styled-system',

	// The JSX framework to use
	jsxFramework: 'react',
})
