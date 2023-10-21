import { cssVar } from '@pacha/shared'
import { tooltipVars } from './recipes/tooltip.recipe'

export const cssVariables = {
  skeleton: cssVar.scope('skeleton', ['start-color', 'end-color']),
  tooltip: tooltipVars,
}
