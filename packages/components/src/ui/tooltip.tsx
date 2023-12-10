import * as Ark from '@ark-ui/react/tooltip'
import { PreferRight } from '@pacha/shared'
import { HTMLStyledProps, styled } from '@pacha/styled-system/jsx'
import { TooltipVariantProps, tooltip } from '@pacha/styled-system/recipes'
import { createStyleContext } from './create-style-context'

const { withProvider, withContext } = createStyleContext(tooltip)

// export * from '@ark-ui/react/tooltip'
interface StyleProps extends HTMLStyledProps<typeof Ark.Tooltip.Root> {}
interface JsxProps extends PreferRight<Ark.TooltipProps, StyleProps> {}

export interface TooltipProps extends JsxProps, TooltipVariantProps {}

const TooltipRoot = withProvider(styled(Ark.Tooltip.Root))
const TooltipArrow = withContext(styled(Ark.Tooltip.Arrow), 'arrow')
const TooltipArrowTip = withContext(styled(Ark.Tooltip.ArrowTip), 'arrowTip')
const TooltipContent = withContext(styled(Ark.Tooltip.Content), 'content')
const TooltipPositioner = withContext(styled(Ark.Tooltip.Positioner), 'positioner')
const TooltipTrigger = withContext(styled(Ark.Tooltip.Trigger), 'trigger')

export const Tooltip = Object.assign(TooltipRoot, {
	Root: TooltipRoot,
	Arrow: TooltipArrow,
	ArrowTip: TooltipArrowTip,
	Content: TooltipContent,
	Positioner: TooltipPositioner,
	Trigger: TooltipTrigger,
})
