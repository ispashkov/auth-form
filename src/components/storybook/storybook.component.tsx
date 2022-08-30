import * as React from 'react'
import { css } from '@emotion/react'

import { VBoxStStMixin } from '../../mixins/flex-layout.mixin'

export const Storybook: React.FC<React.PropsWithChildren> = props => {
  const { children } = props
  return <div css={wrapperCss}>{children}</div>
}

const wrapperCss = css`
  ${VBoxStStMixin};
  gap: var(--spacing-20);
  min-height: 100vh;
  padding: var(--spacing-32);
  background: var(--background-secondary);
`
