import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'
import * as path from 'path'

export default defineConfig({
	plugins: [dts()],
	resolve: {
		conditions: ['source'],
		alias: {
			'@crepe-ui/components': path.resolve(__dirname, '../components/src/components.ts'),
		},
	},
	build: {
		minify: true,
		lib: {
			entry: 'src/components.ts',
			fileName: 'index',
			formats: ['es', 'cjs'],
		},
		rollupOptions: {
			// external: ['react', 'react-dom'],
			external: ['@crepe-ui/styled-system', 'react', 'react-dom', '@ark-ui/react'],
		},
	},
})
