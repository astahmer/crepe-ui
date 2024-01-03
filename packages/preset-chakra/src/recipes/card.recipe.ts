import { cssVar } from '@crepe-ui/shared'
import { defineSlotRecipe } from '@pandacss/dev'

// https://github.com/chakra-ui/chakra-ui/blob/f4b1ad66be1ada4b2728faef4c68a82a76f02532/packages/theme/src/components/card.ts
// packages/components/src/card/card.tsx

const vars = cssVar.scope('card', ['bg', 'padding', 'shadow', 'radius', ['border-width', '0'], 'border-color'])

export const cardRecipe = defineSlotRecipe({
	className: 'card',
	slots: ['container', 'body', 'header', 'footer'],
	base: {
		container: {
			[vars.bg.name]: 'colors.chakra-body-bg',
			backgroundColor: vars.bg.ref,
			boxShadow: vars.shadow.ref,
			borderRadius: vars.radius.ref,
			color: 'chakra-body-text',
			borderWidth: vars['border-width'].ref,
			borderColor: vars['border-color'].ref,
		},
		body: {
			padding: vars.padding.ref,
			flex: '1 1 0%',
		},
		header: {
			padding: vars.padding.ref,
		},
		footer: {
			padding: vars.padding.ref,
		},
	},
	variants: {
		variant: {
			elevated: {
				container: {
					[vars.shadow.name]: 'shadows.base',
					_dark: {
						[vars.bg.name]: 'colors.gray.700',
					},
				},
			},
			outline: {
				container: {
					[vars['border-width'].name]: '1px',
					[vars['border-color'].name]: 'colors.chakra-border-color',
					_dark: {
						[vars['border-color'].name]: 'colors.whiteAlpha.300',
					},
				},
			},
			filled: {
				container: {
					[vars.bg.name]: 'colors.chakra-subtle-bg',
				},
			},
			unstyled: {
				body: {
					[vars.padding.name]: 0,
				},
				header: {
					[vars.padding.name]: 0,
				},
				footer: {
					[vars.padding.name]: 0,
				},
			},
		},
		size: {
			sm: {
				container: {
					[vars.radius.name]: 'radii.base',
					[vars.padding.name]: 'space.3',
				},
			},
			md: {
				container: {
					[vars.radius.name]: 'radii.md',
					[vars.padding.name]: 'space.5',
				},
			},
			lg: {
				container: {
					[vars.radius.name]: 'radii.xl',
					[vars.padding.name]: 'space.7',
				},
			},
		},
	},
	defaultVariants: {
		variant: 'elevated',
		size: 'md',
	},
})
