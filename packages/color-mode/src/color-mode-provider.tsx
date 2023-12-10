// @ts-nocheck

/** Adapted from https://github.com/pacocoursey/next-themes/blob/a385b8d865bbb317ff73a5b6c1319ae566f7d6f1/src/index.tsx */

import { createContext, Fragment, memo, useCallback, useContext, useEffect, useMemo, useState } from 'react'
import type { ColorModeProviderProps, UseColorModeProps } from './color-mode-types'

export type ColorMode = 'light' | 'dark'
const colorSchemes = ['light', 'dark'] as Array<ColorMode | (string & {})>

const MEDIA = '(prefers-color-scheme: dark)'
const isServer = typeof window === 'undefined'
const ColorModeContext = createContext<UseColorModeProps | undefined>(undefined)
const defaultContext: UseColorModeProps = {
	setColorMode: (_) => {},
	colorModes: [],
}

export const useColorMode = () => useContext(ColorModeContext) ?? defaultContext

/**
 * Change value based on color mode.
 *
 * @param light the light mode value
 * @param dark the dark mode value
 *
 * @example
 *
 * ```js
 * const Icon = useColorModeValue(MoonIcon, SunIcon)
 * ```
 */
export function useColorModeValue<TLight = unknown, TDark = unknown>(light: TLight, dark: TDark) {
	const props = useColorMode()
	const colorMode = props.forcedColorMode ?? props.resolvedColorMode
	return colorMode === 'dark' ? dark : light
}

export const ColorModeProvider: React.FC<ColorModeProviderProps> = (props) => {
	const context = useContext(ColorModeContext)

	// Ignore nested context providers, just passthrough children
	if (context) return <Fragment>{props.children as any}</Fragment>
	return <ColorMode {...props} />
}

const noop = () => {}
const forcedDark = {
	setColorMode: noop,
	colorModes: ['dark'],
	colorMode: 'dark',
	forcedColorMode: 'dark',
	resolvedColorMode: 'dark',
	systemColorMode: 'dark',
} as UseColorModeProps
export const DarkModeProvider = ({ children }: { children: React.ReactNode }) => {
	return (
		<ColorModeContext.Provider value={forcedDark}>
			<div data-theme="dark">{children}</div>
		</ColorModeContext.Provider>
	)
}

const defaultColorModes = ['light', 'dark']

const ColorMode: React.FC<ColorModeProviderProps> = ({
	forcedColorMode,
	disableTransitionOnChange = false,
	enableSystem = true,
	enableColorScheme = true,
	storageKey = 'pacha-colorMode',
	colorModes = defaultColorModes,
	defaultColorMode = enableSystem ? 'system' : 'light',
	attribute = 'data-theme',
	value,
	children,
	nonce,
	shadowHostId,
	rootId,
}) => {
	const [colorMode, setColorModeState] = useState(() => getColorMode(storageKey, defaultColorMode))
	const [resolvedColorMode, setResolvedColorMode] = useState(() => getColorMode(storageKey))
	const attrs = !value ? colorModes : Object.values(value)

	const applyColorMode = useCallback((colorMode?: string) => {
		let resolved = colorMode
		if (!resolved) return

		// If colorMode is system, resolve it before setting colorMode
		if (colorMode === 'system' && enableSystem) {
			resolved = getSystemColorMode()
		}

		const name = value ? value[resolved] : resolved
		const enable = disableTransitionOnChange ? disableAnimation() : null
		const shadowRoot = shadowHostId && rootId && document.getElementById(shadowHostId)?.shadowRoot
		const d = shadowRoot ? shadowRoot.getElementById(rootId) ?? document.documentElement : document.documentElement

		if (attribute === 'class') {
			d.classList.remove(...attrs)

			if (name) d.classList.add(name)
		} else {
			if (name) {
				d.setAttribute(attribute, name)
			} else {
				d.removeAttribute(attribute)
			}
		}

		if (enableColorScheme) {
			const fallback = colorSchemes.includes(defaultColorMode) ? defaultColorMode : null
			const colorScheme = colorSchemes.includes(resolved) ? resolved : fallback
			// @ts-ignore
			d.style.colorScheme = colorScheme
		}

		enable?.()
	}, [])

	const setColorMode = useCallback(
		(colorMode: string) => {
			setColorModeState(colorMode)

			// Save to storage
			try {
				localStorage.setItem(storageKey, colorMode)
			} catch (e) {
				// Unsupported
			}
		},
		[forcedColorMode],
	)

	const handleMediaQuery = useCallback(
		(e: MediaQueryListEvent | MediaQueryList) => {
			const resolved = getSystemColorMode(e)
			setResolvedColorMode(resolved)

			if (colorMode === 'system' && enableSystem && !forcedColorMode) {
				applyColorMode('system')
			}
		},
		[colorMode, forcedColorMode],
	)

	// Always listen to System preference
	useEffect(() => {
		const media = window.matchMedia(MEDIA)

		// Intentionally use deprecated listener methods to support iOS & old browsers
		media.addListener(handleMediaQuery)
		handleMediaQuery(media)

		return () => media.removeListener(handleMediaQuery)
	}, [handleMediaQuery])

	// localStorage event handling
	useEffect(() => {
		const handleStorage = (e: StorageEvent) => {
			if (e.key !== storageKey) {
				return
			}

			// If default colorMode set, use it if localstorage === null (happens on local storage manual deletion)
			const colorMode = e.newValue || defaultColorMode
			setColorMode(colorMode)
		}

		window.addEventListener('storage', handleStorage)
		return () => window.removeEventListener('storage', handleStorage)
	}, [setColorMode])

	// Whenever colorMode or forcedColorMode changes, apply it
	useEffect(() => {
		applyColorMode(forcedColorMode ?? colorMode)
	}, [forcedColorMode, colorMode])

	const providerValue = useMemo(
		() => ({
			colorMode,
			setColorMode,
			forcedColorMode,
			resolvedColorMode: colorMode === 'system' ? resolvedColorMode : colorMode,
			colorModes: enableSystem ? [...colorModes, 'system'] : colorModes,
			systemColorMode: (enableSystem ? resolvedColorMode : undefined) as 'light' | 'dark' | undefined,
		}),
		[colorMode, setColorMode, forcedColorMode, resolvedColorMode, enableSystem, colorModes],
	)

	return (
		<ColorModeContext.Provider value={providerValue}>
			<ColorModeScript
				{...{
					forcedColorMode,
					disableTransitionOnChange,
					enableSystem,
					enableColorScheme,
					storageKey,
					colorModes,
					defaultColorMode,
					attribute,
					value,
					children,
					attrs,
					nonce,
					shadowHostId,
					rootId,
				}}
			/>
			{children as any}
		</ColorModeContext.Provider>
	)
}

const ColorModeScript = memo(
	({
		forcedColorMode,
		storageKey,
		attribute,
		enableSystem,
		enableColorScheme,
		defaultColorMode,
		value,
		attrs,
		nonce,
		shadowHostId,
		rootId,
	}: ColorModeProviderProps & {
		attrs: string[]
		defaultColorMode: string
	}) => {
		const defaultSystem = defaultColorMode === 'system'

		// Code-golfing the amount of characters in the script
		const optimization = (() => {
			const host =
				shadowHostId && rootId
					? `document.getElementById('${shadowHostId}').shadowRoot.getElementById('${rootId}')`
					: `document.documentElement`

			if (attribute === 'class') {
				const removeClasses = `c.remove(${attrs.map((t: string) => `'${t}'`).join(',')})`

				return `var d=${host},c=d.classList;${removeClasses};`
			} else {
				return `var d=${host},n='${attribute}',s='setAttribute';`
			}
		})()

		const fallbackColorScheme = (() => {
			if (!enableColorScheme) {
				return ''
			}

			const fallback = colorSchemes.includes(defaultColorMode) ? defaultColorMode : null

			if (fallback) {
				return `if(e==='light'||e==='dark'||!e)d.style.colorScheme=e||'${defaultColorMode}'`
			} else {
				return `if(e==='light'||e==='dark')d.style.colorScheme=e`
			}
		})()

		const updateDOM = (name: string, literal: boolean = false, setColorScheme = true) => {
			const resolvedName = value ? value[name] : name
			const val = literal ? name + `|| ''` : `'${resolvedName}'`
			let text = ''

			// MUCH faster to set colorScheme alongside HTML attribute/class
			// as it only incurs 1 style recalculation rather than 2
			// This can save over 250ms of work for pages with big DOM
			if (enableColorScheme && setColorScheme && !literal && colorSchemes.includes(name)) {
				text += `d.style.colorScheme = '${name}';`
			}

			if (attribute === 'class') {
				if (literal || resolvedName) {
					text += `c.add(${val})`
				} else {
					text += `null`
				}
			} else {
				if (resolvedName) {
					text += `d[s](n,${val})`
				}
			}

			return text
		}

		const scriptSrc = (() => {
			if (forcedColorMode) {
				return `!function(){${optimization}${updateDOM(forcedColorMode)}}()`
			}

			if (enableSystem) {
				return `!function(){try{${optimization}var e=localStorage.getItem('${storageKey}');if('system'===e||(!e&&${defaultSystem})){var t='${MEDIA}',m=window.matchMedia(t);if(m.media!==t||m.matches){${updateDOM(
					'dark',
				)}}else{${updateDOM('light')}}}else if(e){${value ? `var x=${JSON.stringify(value)};` : ''}${updateDOM(
					value ? `x[e]` : 'e',
					true,
				)}}${
					!defaultSystem ? `else{` + updateDOM(defaultColorMode, false, false) + '}' : ''
				}${fallbackColorScheme}}catch(e){}}()`
			}

			return `!function(){try{${optimization}var e=localStorage.getItem('${storageKey}');if(e){${
				value ? `var x=${JSON.stringify(value)};` : ''
			}${updateDOM(value ? `x[e]` : 'e', true)}}else{${updateDOM(
				defaultColorMode,
				false,
				false,
			)};}${fallbackColorScheme}}catch(t){}}();`
		})()

		return <script nonce={nonce} dangerouslySetInnerHTML={{ __html: scriptSrc }} />
	},
	// Never re-render this component
	() => true,
)

// Helpers
const getColorMode = (key: string, fallback?: string) => {
	if (isServer) return undefined
	let colorMode
	try {
		colorMode = localStorage.getItem(key) || undefined
	} catch (e) {
		// Unsupported
	}
	return colorMode || fallback
}

const disableAnimation = () => {
	const css = document.createElement('style')
	css.appendChild(
		document.createTextNode(
			`*{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}`,
		),
	)
	document.head.appendChild(css)

	return () => {
		// Force restyle
		;(() => window.getComputedStyle(document.body))()

		// Wait for next tick before removing
		setTimeout(() => {
			document.head.removeChild(css)
		}, 1)
	}
}

const getSystemColorMode = (e?: MediaQueryList | MediaQueryListEvent) => {
	if (!e) e = window.matchMedia(MEDIA)
	const isDark = e.matches
	const systemColorMode = isDark ? 'dark' : 'light'
	return systemColorMode
}
