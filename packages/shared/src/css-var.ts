const cssVarRef = <Value extends string>(value: Value, fallback?: string) =>
  `var(--${value}${fallback ? ', ' + fallback : ''})` as const
const cssVarName = <Value extends string>(value: Value) => `--${value}` as const
const createCssVar = <Value extends string>(value: Value, fallback?: string) =>
  ({
    name: cssVarName(value),
    ref: cssVarRef(value, fallback),
  } as CssVar<Value>)

export type CssVar<Name extends string> = {
  name: `--${Name}`
  ref: `var(--${Name})`
}
export type ToCssVar<Cat extends string, T extends string> = `--${Cat}-${T}`

function defineCssVars<K extends string>(scope: string, keys: Array<K | [K, string]>) {
  const vars = {} as Record<K, CssVar<K>>
  for (const key of keys) {
    if (Array.isArray(key)) {
      const [name, fallback] = key
      vars[name] = cssVar.create(`${scope}-${name}`, fallback) as CssVar<K>
      continue
    }

    vars[key] = cssVar.create(`${scope}-${key}`) as CssVar<K>
  }
  return vars as {
    [Var in K]: CssVar<Var>
  }
}

export const cssVar = {
  ref: cssVarRef,
  name: cssVarName,
  create: createCssVar,
  scope: defineCssVars,
}
