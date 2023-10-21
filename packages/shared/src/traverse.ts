type AnyRecord = Record<string, any>
type CallbackFn = (key: string, value: AnyRecord, path: string) => void

const isObjectOrArray = (obj: unknown) => typeof obj === 'object' && obj !== null

const defaultOptions = { separator: '.' }

export function traverse(
  obj: AnyRecord,
  callback: CallbackFn,
  options: { separator: string } = defaultOptions,
  path = '',
): void {
  const separator = options.separator ?? defaultOptions.separator

  // Check if the passed argument is an object or an array, and if the maximum depth has been reached
  if (obj === null || typeof obj !== 'object') {
    return
  }

  const keys = Object.keys(obj)

  for (let i = 0, len = keys.length; i < len; i++) {
    const key = keys[i]
    const value = obj[key]
    const isObj = isObjectOrArray(value)
    const newPath = path ? `${path}${separator}${key}` : key

    callback(key, value, newPath)

    // If the value is also an object or array, recurse into it
    if (isObj) {
      traverse(value, callback, options, newPath)
    }
  }
}
