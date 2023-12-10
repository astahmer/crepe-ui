import type { StaticCssOptions } from '@pandacss/types'

const staticCss: StaticCssOptions = {
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

export const defaultConfig = {
	// prefix: 'p',
	cssVarRoot: '',
	staticCss,
	presets: ['@pandacss/preset-panda', '@pacha/preset-chakra'],
}
