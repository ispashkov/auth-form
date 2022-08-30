import * as React from 'react'

interface UseControlledProps<T = unknown> {
  /**
   * Holds the component value when it's controlled.
   */
  controlled: T | undefined
  /**
   * The default value when uncontrolled.
   */
  default: T | undefined
}

export function useControlled<T = unknown>(
  props: UseControlledProps<T>
): [T | undefined, (newValue: T | undefined) => void] {
  const { controlled, default: defaultProp } = props

  const { current: isControlled } = React.useRef<boolean>(controlled !== undefined)
  const [valueState, setValue] = React.useState<T | undefined>(defaultProp)
  const value = isControlled ? controlled : valueState

  const setValueIfUncontrolled = React.useCallback(
    (newValue: T | undefined) => {
      if (!isControlled) {
        setValue(newValue)
      }
    },
    [isControlled]
  )

  return [value, setValueIfUncontrolled]
}
