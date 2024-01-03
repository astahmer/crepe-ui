import { definePreset } from '@pandacss/dev'
import { conditions } from './conditions'
import { globalStyles } from './global-styles'
import { keyframes } from './keyframes'
import { generatePreflight } from './preflight'
import { chakraRecipes } from './recipes'
import { semanticTokens } from './semantic-tokens'
import { textStyles } from './text-styles'
import { tokens } from './tokens'
import { utilities } from './utilities'

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

export { defaultConfig } from './default-config'
export { chakraRecipes, generatePreflight }
