import { cva, cx } from '@pacha/styled-system/css'
import { styled } from '@pacha/styled-system/jsx'
import { HTMLStyledProps, RecipeVariantProps } from '@pacha/styled-system/types'
import { forwardRef } from 'react'

const styles = cva({
	base: {
		flex: '0 0 auto',
		width: 'auto',
		display: 'flex',
		alignItems: 'center',
		whiteSpace: 'nowrap',
	},
	variants: {
		placement: {
			left: {
				marginEnd: '-1px',
				borderEndRadius: 0,
				borderEndColor: 'transparent',
			},
			right: {
				marginStart: '-1px',
				borderStartRadius: 0,
				borderStartColor: 'transparent',
			},
		},
	},
})

export interface InputAddonProps extends HTMLStyledProps<'div'>, NonNullable<RecipeVariantProps<typeof styles>> {}

export const InputAddon = forwardRef<HTMLDivElement, InputAddonProps>(function InputAddon(props, ref) {
	const { placement = 'left', className, ...rest } = props

	return <styled.div data-placement={placement} {...rest} className={cx(styles({ placement }), className)} ref={ref} />
})

InputAddon.displayName = 'InputAddon'
