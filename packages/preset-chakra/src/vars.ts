import { cssVar } from '@pacha/shared'

export const cssVariables = {
	badge: cssVar.scope('badge', [['bg', 'inherit'], ['bg-alpha', 'inherit'], ['color', 'inherit'], 'shadow']),
	skeleton: cssVar.scope('skeleton', ['start-color', 'end-color']),
	tooltip: cssVar.scope('tooltip', ['bg', 'fg', 'arrow-bg']),
}
