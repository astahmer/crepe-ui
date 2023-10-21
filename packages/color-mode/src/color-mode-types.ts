/** Adapted from https://github.com/pacocoursey/next-theme/blob/a385b8d865bbb317ff73a5b6c1319ae566f7d6f1/src/types.ts */
import type { ReactNode } from 'react'

interface ValueObject {
  [colorModeName: string]: string
}

export interface UseColorModeProps {
  /** List of all available colorMode names */
  colorModes: string[]
  /** Forced colorMode name for the current page */
  forcedColorMode?: string
  /** Update the colorMode */
  setColorMode: (colorMode: string) => void
  /** Active colorMode name */
  colorMode?: string
  /** If `enableSystem` is true and the active colorMode is "system", this returns whether the system preference resolved to "dark" or "light". Otherwise, identical to `colorMode` */
  resolvedColorMode?: string
  /** If enableSystem is true, returns the System colorMode preference ("dark" or "light"), regardless what the active colorMode is */
  systemColorMode?: 'dark' | 'light'
}

export interface ColorModeProviderProps {
  /** List of all available colorMode names */
  colorModes?: string[]
  /** Forced colorMode name for the current page */
  forcedColorMode?: string
  /** Whether to switch between dark and light colorModes based on prefers-color-scheme */
  enableSystem?: boolean
  /** Disable all CSS transitions when switching colorModes */
  disableTransitionOnChange?: boolean
  /** Whether to indicate to browsers which color scheme is used (dark or light) for built-in UI like inputs and buttons */
  enableColorScheme?: boolean
  /** Key used to store colorMode setting in localStorage */
  storageKey?: string
  /** Default colorMode name (for v0.0.12 and lower the default was light). If `enableSystem` is false, the default colorMode is light */
  defaultColorMode?: string
  /** HTML attribute modified based on the active colorMode. Accepts `class` and `data-*` (meaning any data attribute, `data-mode`, `data-color`, etc.) */
  attribute?: 'class' | (string & {})
  /** Mapping of colorMode name to HTML attribute value. Object where key is the colorMode name and value is the attribute value */
  value?: ValueObject
  /** Nonce string to pass to the inline script for CSP headers */
  nonce?: string

  shadowHostId?: string
  rootId?: string
  children?: ReactNode
}
