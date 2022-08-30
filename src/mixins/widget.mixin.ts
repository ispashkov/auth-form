import { css } from '@emotion/react'

import { genMediumShadowMixin } from './shadows.mixin'
import { genTransitionMixin } from './transitions.mixin'

export const WidgetMixin = css`
  background: var(--background-primary);
`

export const WidgetInteractiveMixin = css`
  ${WidgetMixin};
  ${genTransitionMixin('box-shadow')}
  padding: var(--spacing-16) var(--spacing-16) var(--spacing-16) var(--spacing-24);

  &:hover {
    ${genMediumShadowMixin(0, 0, 0, 0.05)};
  }
`
