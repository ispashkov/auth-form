import * as React from 'react'

import { PolymorphicComponentProp } from './polymorphic.types'

export const Polymorphic: React.FC<PolymorphicComponentProp<React.ElementType>> = props => {
  const { as: Component = 'div', className, ...restProps } = props

  return <Component className={className} {...restProps} />
}
