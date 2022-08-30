import * as React from 'react'

import { PolymorphicComponentPropWithRef } from '../polymorphic/polymorphic.types'

interface ButtonBaseProps<C extends React.ElementType> extends React.ButtonHTMLAttributes<C> {
  size?: ButtonSize
  color?: ButtonColor
  loading?: boolean
  block?: boolean
}

export type ButtonProps<C extends React.ElementType> = PolymorphicComponentPropWithRef<
  C,
  React.PropsWithChildren<ButtonBaseProps<C>>
>

export enum ButtonSize {
  H40 = 'H40',
}

export enum ButtonColor {
  PrimaryBlue = 'PrimaryBlue',
  PrimaryOrange = 'PrimaryOrange',
  Secondary = 'Secondary',
  Ghost = 'Ghost',
}
