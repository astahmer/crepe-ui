import { TokenCategory } from '@pandacss/types'
import { traverse } from './traverse'
import { dashCase } from './utils'

interface TokenRecord extends Record<TokenCategory | (string & {}), Record<string, number | string | undefined>> {}

export type ToTokenRecord<TTokens extends Record<string, any>> = {
	[Category in TokenCategory]-?: {
		[TokenName in TTokens[Category]]?: number | string
	}
}

// TODO handle hash
export const assignInlineVars = <TRecord extends TokenRecord>(userVars?: Partial<TRecord>, prefix?: string) => {
	const vars = {} as TokenRecord

	for (const [category, tokens] of Object.entries(userVars ?? {})) {
		traverse(
			tokens,
			({ value, path }) => {
				if (typeof value === 'string' || typeof value === 'number') {
					const cssVarRef = `--${prefix ? `${prefix}-` : ''}${dashCase(category)}-${dashCase(path.replace('.', '-'))}`
					vars[cssVarRef] = value as any
				}
			},
			{ separator: '-' },
		)
	}

	return vars as Record<string, any>
}
