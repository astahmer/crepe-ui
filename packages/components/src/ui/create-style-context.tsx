import { createContext, forwardRef, useContext, type ComponentProps, type ElementType } from 'react'

// https://github.com/kumaaa-inc/shadow-panda/blob/2e8fa2cb37c66d97bd0ae705297c471ef5c2d548/packages/style-context/src/style-context.tsx#L15

type AnyProps = Record<string, unknown>
type AnyRecipe = {
  (props?: AnyProps): Record<string, string>
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  splitVariantProps: (props: AnyProps) => any
}

type Slot<R extends AnyRecipe> = keyof ReturnType<R>
type SlotRecipe<R extends AnyRecipe> = Record<Slot<R>, string>
type VariantProps<R extends AnyRecipe> = Parameters<R>[0]

export interface StyledContextProvider<T extends ElementType, R extends AnyRecipe> {
  (props: ComponentProps<T> & VariantProps<R>): JSX.Element
}

const cx = (...args: (string | undefined)[]) => args.filter(Boolean).join(' ')

export const createStyleContext = <R extends AnyRecipe>(recipe: R) => {
  const StyleContext = createContext<SlotRecipe<R> | null>(null)

  const withProvider = <T extends ElementType>(
    Component: T,
    slot?: Slot<R>,
    defaultProps?: Partial<T> & { className?: string },
  ) => {
    const Comp = forwardRef((props: ComponentProps<T> & VariantProps<R>, ref) => {
      const [variantProps, otherProps] = recipe.splitVariantProps(props as AnyProps)
      const { className = '', ...rest } = otherProps
      const styles = recipe(variantProps) as SlotRecipe<R>
      const slotClass = styles?.[slot ?? '']
      const classNames = cx(defaultProps?.className, slotClass, className)

      return (
        <StyleContext.Provider value={styles}>
          <Component
            // useful for debugging
            // data-recipe={recipe.name}
            // data-slot={slot ?? ''}
            ref={ref}
            {...defaultProps}
            className={classNames}
            {...rest}
          />
        </StyleContext.Provider>
      )
    })

    // @ts-expect-error it's fine
    Comp.displayName = Component.displayName || Component.name
    return Comp as unknown as StyledContextProvider<T, R>
  }

  const withContext = <T extends ElementType>(
    Component: T,
    slot?: Slot<R>,
    defaultProps?: Partial<T> & { className?: string },
  ) => {
    if (!slot) return Component

    const Comp = forwardRef(({ className, ...rest }: ComponentProps<T> & { className?: string }, ref) => {
      const styles = useContext(StyleContext)
      const slotClass = styles?.[slot ?? '']
      const classNames = cx(defaultProps?.className, slotClass, className)

      return (
        <Component
          // useful for debugging
          // data-recipe={recipe.name}
          // data-slot={slot ?? ''}
          ref={ref}
          {...defaultProps}
          className={classNames}
          {...(rest as any)}
        />
      )
    })

    // @ts-expect-error it's fine
    Comp.displayName = Component.displayName || Component.name
    return Comp as unknown as T
  }

  return {
    withProvider,
    withContext,
  }
}
