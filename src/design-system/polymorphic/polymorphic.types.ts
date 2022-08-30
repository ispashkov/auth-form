import * as React from 'react'

type AsProp<C extends React.ElementType> = {
  as?: C
  className?: string
}

type PropsToOmit<C extends React.ElementType, P> = keyof (AsProp<C> & P)

// This is the type for the "ref" only
type PolymorphicRef<C extends React.ElementType> = React.ComponentPropsWithRef<C>['ref']

// This is the first reusable type utility we built
export type PolymorphicComponentProp<C extends React.ElementType, Props = {}> = React.PropsWithChildren<
  Props & AsProp<C>
> &
  Omit<React.ComponentPropsWithoutRef<C>, PropsToOmit<C, Props>>

// This is a new type utility with ref!
export type PolymorphicComponentPropWithRef<C extends React.ElementType, Props = {}> = PolymorphicComponentProp<
  C,
  Props
> & { ref?: PolymorphicRef<C> }
