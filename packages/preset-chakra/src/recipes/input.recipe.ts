import { cssVar } from '@crepe-ui/shared'
import { defineSlotRecipe } from '@pandacss/dev'

// https://github.com/chakra-ui/chakra-ui/blob/f4b1ad66be1ada4b2728faef4c68a82a76f02532/packages/theme/src/components/input.ts
// https://github.com/chakra-ui/chakra-ui/blob/119a52932dcca3a74b469ae05dabb8bfec788dfe/packages/components/theme/src/components/input.ts

const vars = cssVar.scope('input', [
	'focus-border-color',
	'error-border-color',
	'height',
	'font-size',
	'padding',
	'border-radius',
])

const sizes = {
	lg: {
		[vars['font-size'].name]: 'fontSizes.lg',
		[vars.padding.name]: 'space.4',
		[vars['border-radius'].name]: 'radii.md',
		[vars.height.name]: 'sizes.12',
	},
	md: {
		[vars['font-size'].name]: 'fontSizes.md',
		[vars.padding.name]: 'space.4',
		[vars['border-radius'].name]: 'radii.md',
		[vars.height.name]: 'sizes.10',
	},
	sm: {
		[vars['font-size'].name]: 'fontSizes.sm',
		[vars.padding.name]: 'space.3',
		[vars['border-radius'].name]: 'radii.sm',
		[vars.height.name]: 'sizes.8',
	},
	xs: {
		[vars['font-size'].name]: 'fontSizes.xs',
		[vars.padding.name]: 'space.2',
		[vars['border-radius'].name]: 'radii.sm',
		[vars.height.name]: 'sizes.6',
	},
}

const withVars = {
	height: vars.height.ref,
	fontSize: vars['font-size'].ref,
	px: vars.padding.ref,
	borderRadius: vars['border-radius'].ref,
}

export const inputRecipe = defineSlotRecipe({
	className: 'input',
	jsx: ['Input', 'Input.Group'],
	slots: ['group', 'field', 'addon'],
	base: {
		// https://github.com/chakra-ui/chakra-ui/blob/f4b1ad66be1ada4b2728faef4c68a82a76f02532/packages/components/src/input/input-group.tsx
		group: {
			width: '100%',
			display: 'flex',
			position: 'relative',
			// Parts of inputs override z-index to ensure that they stack correctly on each other
			// Create a new stacking context so that these overrides don't leak out and conflict with other z-indexes
			isolation: 'isolate',
			//
			'& > [data-placement="left"]': {
				borderStartRadius: 0,
			},
			'& > [data-placement="right"]': {
				borderEndRadius: 0,
			},
			'&:has([data-placement="right"]) > input': {
				borderEndRadius: 0,
			},
			[vars['border-radius'].name]: '0',
		},
		addon: {
			...withVars,
			'& + input': {
				borderStartRadius: 0,
			},
		},
		field: {
			...withVars,
			//
			width: '100%',
			minWidth: 0,
			outline: 0,
			position: 'relative',
			appearance: 'none',
			transitionProperty: 'common',
			transitionDuration: 'normal',
			_disabled: {
				opacity: 0.4,
				cursor: 'not-allowed',
			},
			[vars['focus-border-color'].name]: {},
			base: {
				// TODO check ok
				[vars['focus-border-color'].name]: 'colors.blue.500',
				[vars['error-border-color'].name]: 'colors.red.500',
			},
			_dark: {
				[vars['focus-border-color'].name]: 'colors.blue.300',
				[vars['error-border-color'].name]: 'colors.red.300',
			},
		},
	},
	variants: {
		size: {
			lg: { field: sizes.lg, addon: sizes.lg, group: sizes.lg },
			md: { field: sizes.md, addon: sizes.md, group: sizes.md },
			sm: { field: sizes.sm, addon: sizes.sm, group: sizes.sm },
			xs: { field: sizes.xs, addon: sizes.xs, group: sizes.xs },
		},
		variant: {
			outline: {
				field: {
					border: '1px solid',
					borderColor: 'inherit',
					bg: 'inherit',
					_hover: {
						borderColor: { base: 'gray.300', _dark: 'whiteAlpha.400' },
					},
					_readOnly: {
						boxShadow: 'none !important',
						userSelect: 'all',
					},
					_invalid: {
						borderColor: vars['error-border-color'].ref,
						boxShadow: `0 0 0 1px ${vars['error-border-color'].ref}`,
					},
					_focusVisible: {
						zIndex: 1,
						borderColor: vars['focus-border-color'].ref,
						boxShadow: `0 0 0 1px ${vars['focus-border-color'].ref}`,
					},
				},
				addon: {
					border: '1px solid',
					borderColor: { base: 'inherit', _dark: 'whiteAlpha.50' },
					bg: { base: 'gray.100', _dark: 'whiteAlpha.300' },
				},
			},
			filled: {
				field: {
					border: '2px solid',
					borderColor: 'transparent',
					bg: { base: 'gray.100', _dark: 'whiteAlpha.50' },
					_hover: {
						bg: { base: 'gray.200', _dark: 'whiteAlpha.100' },
					},
					_readOnly: {
						boxShadow: 'none !important',
						userSelect: 'all',
					},
					_invalid: {
						borderColor: vars['error-border-color'].ref,
					},
					_focusVisible: {
						bg: 'transparent',
						borderColor: vars['focus-border-color'].ref,
					},
				},
				addon: {
					border: '2px solid',
					borderColor: 'transparent',
					bg: { base: 'gray.100', _dark: 'whiteAlpha.50' },
				},
			},
			flushed: {
				field: {
					borderBottom: '1px solid',
					borderColor: 'inherit',
					borderRadius: '0',
					px: '0',
					bg: 'transparent',
					_readOnly: {
						boxShadow: 'none !important',
						userSelect: 'all',
					},
					_invalid: {
						borderColor: vars['error-border-color'].ref,
						boxShadow: `0px 1px 0px 0px ${vars['error-border-color'].ref}`,
					},
					_focusVisible: {
						borderColor: vars['focus-border-color'].ref,
						boxShadow: `0px 1px 0px 0px ${vars['focus-border-color'].ref}`,
					},
				},
				addon: {
					borderBottom: '2px solid',
					borderColor: 'inherit',
					borderRadius: '0',
					px: '0',
					bg: 'transparent',
				},
			},
			unstyled: {
				field: {
					bg: 'transparent',
					px: '0',
					height: 'auto',
				},
				addon: {
					bg: 'transparent',
					px: '0',
					height: 'auto',
				},
			},
		},
	},
	defaultVariants: {
		size: 'md',
		variant: 'outline',
	},
})
