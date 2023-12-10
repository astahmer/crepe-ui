import { defineSlotRecipe } from '@pandacss/dev'
import { tabsAnatomy } from '@ark-ui/anatomy'
import { cssVar } from '@pacha/shared'

// https://github.com/chakra-ui/chakra-ui/blob/f4b1ad66be1ada4b2728faef4c68a82a76f02532/packages/theme/src/components/tabs.ts
// https://github.com/chakra-ui/chakra-ui/blob/f4b1ad66be1ada4b2728faef4c68a82a76f02532/packages/components/src/tabs/tab.tsx

const vars = cssVar.scope('tabs', ['color', 'bg', 'border-color', 'border-prop', 'margin-prop'])
const $fg = vars.color
const $bg = vars.bg
const $border = vars['border-color']

/**
 * chakra v3 parts - ark-ui slots
 *
 * @prop root - root
 * @prop tablist - list
 * @prop tab - trigger
 * @prop tabpanels - content
 * @prop tabpanel - .
 * @prop . - indicator
 */
export const tabsRecipe = defineSlotRecipe({
	className: 'tabs',
	slots: tabsAnatomy.extendWith('panels').keys(),
	base: {
		root: {
			colorPalette: 'blue',
			_vertical: { display: 'flex' },
			_horizontal: { display: 'block' },
		},
		list: {
			// from Park-UI
			position: 'relative',
			scrollbarWidth: 'none',
			'&::-webkit-scrollbar': {
				display: 'none',
			},
			//
			display: 'flex',
			_vertical: {
				flexDirection: 'column',
				borderInlineStart: vars['border-color'].ref,
				marginInlineStart: vars['margin-prop'].ref,
			},
			_horizontal: {
				flexDirection: 'row',
				borderBottom: vars['border-color'].ref,
				marginBottom: vars['margin-prop'].ref,
			},
		},
		trigger: {
			outline: '0',
			display: 'flex',
			alignItems: 'center',
			justifyContent: 'center',
			//
			transitionProperty: 'common',
			transitionDuration: 'normal',
			_focusVisible: {
				zIndex: 1,
				boxShadow: 'outline',
			},
			_disabled: {
				cursor: 'not-allowed',
				opacity: 0.4,
			},
		},
		panels: {
			width: '100%',
		},
		content: {
			outline: '0',
			p: 4,
		},
		// https://github.com/chakra-ui/chakra-ui/blob/cb71ce45ca82765c11e6d45d627303ddb60ea23a/packages/components/src/tabs/use-tabs.ts
		indicator: {
			display: 'none', // there's no indicator in Chakra-UI
			//
			bgColor: 'colorPalette.950',
			_horizontal: {
				height: '2px',
				bottom: '0',
			},
			_vertical: {
				width: '2px',
				left: '0',
			},
		},
	},
	variants: {
		size: {
			sm: { trigger: { py: 1, px: 4, fontSize: 'sm' } },
			md: { trigger: { fontSize: 'md', py: 2, px: 4 } },
			lg: { trigger: { fontSize: 'lg', py: 3, px: 4 } },
		},
		variant: {
			line: {
				list: {
					[vars['border-color'].name]: '2px solid',
					borderColor: 'inherit',
				},
				trigger: {
					[vars['border-color'].name]: '2px solid',
					borderColor: 'transparent',
					[vars['margin-prop'].name]: '-2px',
					_selected: {
						[$fg.name]: `colors.colorPalette.600`,
						_dark: {
							[$fg.name]: `colors.colorPalette.300`,
						},
						borderColor: 'currentColor',
					},
					_active: {
						[$bg.name]: 'colors.gray.200',
						_dark: {
							[$bg.name]: 'colors.whiteAlpha.300',
						},
					},
					_disabled: {
						_active: { bg: 'none' },
					},
					color: $fg.ref,
					bg: $bg.ref,
				},
			},
			enclosed: {
				trigger: {
					borderTopRadius: 'md',
					border: '1px solid',
					borderColor: 'transparent',
					mb: '-1px',
					[$border.name]: 'transparent',
					_selected: {
						[$fg.name]: `colors.colorPalette.600`,
						[$border.name]: `colors.white`,
						_dark: {
							[$fg.name]: `colors.colorPalette.300`,
							[$border.name]: `colors.gray.800`,
						},
						borderColor: 'inherit',
						borderBottomColor: $border.ref,
					},
					color: $fg.ref,
				},
				list: {
					mb: '-1px',
					borderBottom: '1px solid',
					borderColor: 'inherit',
				},
			},
			'enclosed-colored': {
				trigger: {
					border: '1px solid',
					borderColor: 'inherit',
					[$bg.name]: 'colors.gray.50',
					_dark: {
						[$bg.name]: 'colors.whiteAlpha.50',
					},
					mb: '-1px',
					_notLast: {
						marginEnd: '-1px',
					},
					_selected: {
						[$bg.name]: 'colors.white',
						[$fg.name]: `colors.colorPalette.600`,
						_dark: {
							[$bg.name]: 'colors.gray.800',
							[$fg.name]: `colors.colorPalette.300`,
						},
						borderColor: 'inherit',
						borderTopColor: 'currentColor',
						borderBottomColor: 'transparent',
					},
					color: $fg.ref,
					bg: $bg.ref,
				},
				list: {
					mb: '-1px',
					borderBottom: '1px solid',
					borderColor: 'inherit',
				},
			},
			'soft-rounded': {
				trigger: {
					borderRadius: 'full',
					fontWeight: 'semibold',
					color: 'gray.600',
					_selected: {
						color: `colorPalette.700`,
						bg: `colorPalette.100`,
					},
				},
			},
			'solid-rounded': {
				trigger: {
					borderRadius: 'full',
					fontWeight: 'semibold',
					[$fg.name]: 'colors.gray.600',
					_dark: {
						[$fg.name]: 'inherit',
					},
					_selected: {
						[$fg.name]: 'colors.white',
						[$bg.name]: `colors.colorPalette.600`,
						_dark: {
							[$fg.name]: 'colors.gray.800',
							[$bg.name]: `colors.colorPalette.300`,
						},
					},
					color: $fg.ref,
					bg: $bg.ref,
				},
			},
			unstyled: {},
		},
		isFitted: {
			true: {
				trigger: { flex: 1 },
			},
		},
	},
	defaultVariants: {
		size: 'md',
		variant: 'line',
	},
})
