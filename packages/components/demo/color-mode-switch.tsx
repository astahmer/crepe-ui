import { useColorMode } from './color-mode'
import { Button } from '@pacha/components'
import { css } from '@pacha/styled-system/css'
import { useEffect, useState } from 'react'

export const ColorModeSwitch = () => {
	const [mounted, setMounted] = useState(false)
	const colorMode = useColorMode()

	useEffect(() => {
		setMounted(true)
	}, [])

	const { setColorMode, resolvedColorMode } = colorMode

	if (!mounted) {
		return null
	}

	const isDark = resolvedColorMode === 'dark'

	const toggleColorMode = () => setColorMode(isDark ? 'light' : 'dark')

	const IconToUse = isDark ? '🌙' : '☀️'
	const iconText = isDark ? 'Dark' : 'Light'

	return (
		<Button
			px="0"
			title={iconText}
			onClick={(e) => {
				console.log(e)
				toggleColorMode()
			}}
		>
			<span className={css({ pointerEvents: 'none' })}>{IconToUse}</span>
		</Button>
	)
}
