import { ComponentProps, ElementType, createElement, forwardRef } from 'react'
import { createContext } from './context'
import { CssVarProperties, cx } from '@pacha/styled-system'

export const createThemeStyled = <T extends ElementType, P extends ComponentProps<T> = ComponentProps<T>>(
  Component: T,
  name: string,
) => {
  return forwardRef<T, P>((props, ref) => {
    const themeProps = useThemeProps()?.[name]
    const className = cx(props?.className, themeProps?.className)
    const style = Object.assign({}, props?.style, themeProps?.style)

    return createElement(Component, {
      ref,
      ...Object.assign({}, props, themeProps?.defaultProps),
      className,
      style,
    })
  }) as unknown as T
}

export interface UserThemeProps<TProps = Record<string, unknown>> {
  defaultProps?: TProps
  className?: string
  style?: React.CSSProperties & CssVarProperties
}

export interface ThemePropsContext extends Record<string, UserThemeProps | undefined> {}

export const [ThemePropsProvider, useThemeProps] = createContext<ThemePropsContext>({
  strict: false,
  name: 'ThemeProps',
})
