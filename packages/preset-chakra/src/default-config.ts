import { Config } from '@pandacss/dev'

const staticCss: Config['staticCss'] = {
	css: [{ properties: { colorPalette: ['*'] } }],
	recipes: {
		alert: ['*'],
		avatar: ['*'],
		button: ['*'],
		card: ['*'],
		checkbox: ['*'],
		closeButton: ['*'],
		code: ['*'],
		badge: ['*'],
		formControl: ['*'],
		heading: ['*'],
		icon: ['*'],
		input: ['*'],
		kbd: ['*'],
		link: ['*'],
		modal: ['*'],
		popover: ['*'],
		select: ['*'],
		skeleton: ['*'],
		switchRecipe: ['*'],
		tabs: ['*'],
		table: ['*'],
		tag: ['*'],
		textarea: ['*'],
		tooltip: ['*'],
	},
}

export const defaultConfig: Config = {
	staticCss,
	presets: ['@pandacss/preset-panda', '@crepe-ui/preset-chakra'],
}
