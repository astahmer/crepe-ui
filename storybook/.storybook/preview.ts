import type { Preview } from '@storybook/react'
import '../stories/index.css'
import '@crepe-ui/preset-chakra/reset.css'
import '@crepe-ui/components/static.css'

const preview: Preview = {
	parameters: {
		actions: { argTypesRegex: '^on[A-Z].*' },
		controls: {
			matchers: {
				color: /(background|color)$/i,
				date: /Date$/i,
			},
		},
	},
}

export default preview
