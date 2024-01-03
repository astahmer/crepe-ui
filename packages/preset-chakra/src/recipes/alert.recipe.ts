import { colorMixVar, cssVar } from '@crepe-ui/shared'
import { defineSlotRecipe } from '@pandacss/dev'

// https://github.com/chakra-ui/chakra-ui/blob/f4b1ad66be1ada4b2728faef4c68a82a76f02532/packages/components/src/alert/alert.tsx
// https://github.com/chakra-ui/chakra-ui/blob/f4b1ad66be1ada4b2728faef4c68a82a76f02532/packages/components/src/alert/alert-icon.tsx
// https://github.com/chakra-ui/chakra-ui/blob/f4b1ad66be1ada4b2728faef4c68a82a76f02532/packages/theme/src/components/alert.ts

const vars = cssVar.scope('alert', ['fg', 'bg', 'bg-alpha'])
const bgDark = colorMixVar('colorPalette.200/16', vars['bg-alpha'])

export const alertRecipe = defineSlotRecipe({
	className: 'alert',
	slots: ['container', 'icon', 'spinner', 'title', 'description'],
	base: {
		container: {
			colorPalette: 'blue',
			bg: vars.bg.ref,
			px: '4',
			py: '3',
			//
			width: '100%',
			display: 'flex',
			alignItems: 'center',
			position: 'relative',
			overflow: 'hidden',
		},
		title: {
			fontWeight: 'bold',
			lineHeight: '6',
			marginEnd: '2',
		},
		description: {
			lineHeight: '6',
		},
		icon: {
			color: vars.fg.ref,
			flexShrink: 0,
			marginEnd: '3',
			w: '5',
			h: '6',
			//
			display: 'inherit',
		},
		spinner: {
			color: vars.fg.ref,
			flexShrink: 0,
			marginEnd: '3',
			w: '5',
			h: '5',
		},
	},
	variants: {
		variant: {
			subtle: {
				container: {
					[vars.fg.name]: 'colors.colorPalette.500',
					[vars.bg.name]: 'colors.colorPalette.100',
					_dark: {
						[vars.fg.name]: 'colors.colorPalette.200',
						[vars['bg-alpha'].name]: bgDark.colorMixValue,
						[vars.bg.name]: bgDark.value,
					},
				},
			},
			'left-accent': {
				container: {
					[vars.fg.name]: 'colors.colorPalette.500',
					[vars.bg.name]: 'colors.colorPalette.100',
					_dark: {
						[vars.fg.name]: 'colors.colorPalette.200',
						[vars['bg-alpha'].name]: bgDark.colorMixValue,
					},
					paddingStart: '3',
					borderStartWidth: '4px',
					borderStartColor: vars.fg.ref,
				},
			},
			'top-accent': {
				container: {
					[vars.fg.name]: 'colors.colorPalette.500',
					[vars.bg.name]: 'colors.colorPalette.100',
					_dark: {
						[vars.fg.name]: 'colors.colorPalette.200',
						[vars.bg.name]: bgDark.value,
					},
					pt: '2',
					borderTopWidth: '4px',
					borderTopColor: vars.fg.ref,
				},
			},
			solid: {
				container: {
					[vars.fg.name]: 'colors.white',
					[vars.bg.name]: 'colors.colorPalette.500',
					_dark: {
						[vars.fg.name]: 'colors.gray.900',
						[vars.bg.name]: 'colors.colorPalette.200',
					},
					color: vars.fg.ref,
				},
			},
		},
	},
	defaultVariants: {
		variant: 'subtle',
	},
})
