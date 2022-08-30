import { css } from '@emotion/react'
import { transitions } from 'polished'

export const genTransitionMixin = (properties: string | Array<string>) => css`
  ${transitions(properties, '0.2s ease-in')}
`
