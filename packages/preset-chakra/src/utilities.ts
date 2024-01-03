import { defineUtility } from '@pandacss/dev'
import { colorMix } from '@crepe-ui/shared'

const noOfLines = defineUtility({
	className: 'n-lines',
	values: { type: 'number' },
	transform(value) {
		return {
			overflow: 'hidden',
			textOverflow: 'ellipsis',
			display: '-webkit-box',
			WebkitBoxOrient: 'vertical',
			//@ts-ignore
			WebkitLineClamp: 'var(--chakra-line-clamp)',
			'--chakra-line-clamp': value,
		}
	},
})

const backgroundAlpha = defineUtility({
	shorthand: ['bga'],
	property: 'backgroundColor',
	className: 'bg-alpha',
	values: { type: 'string' },
	transform: (...args) => {
		const { value, color } = colorMix(...args)

		return {
			'--bga': value,
			backgroundColor: `var(--bga, ${color})`,
		}
	},
})

const colorAlpha = defineUtility({
	property: 'color',
	className: 'text-alpha',
	values: { type: 'string' },
	transform: (...args) => {
		const { value, color } = colorMix(...args)

		return {
			'--color-alpha': value,
			color: `var(--color-alpha, ${color})`,
		}
	},
})

export const utilities = {
	extend: {
		noOfLines,
		backgroundAlpha,
		colorAlpha,
	},
}
