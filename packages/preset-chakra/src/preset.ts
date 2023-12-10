import { definePreset } from '@pandacss/dev'
import { globalStyles } from './global-styles'
import { chakraRecipes } from './recipes'
import { semanticTokens } from './semantic-tokens'
import { tokens } from './tokens'
import { keyframes } from './keyframes'
import { utilities } from './utilities'
import { conditions } from './conditions'
import { textStyles } from './text-styles'
import { generatePreflight } from './preflight'

export default definePreset({
	globalCss: globalStyles,
	utilities,
	conditions,
	theme: {
		extend: {
			semanticTokens,
			tokens,
			recipes: chakraRecipes,
			keyframes,
			textStyles,
		},
	},
})

export { chakraRecipes, generatePreflight }
