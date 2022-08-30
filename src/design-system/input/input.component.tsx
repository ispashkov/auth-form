import * as React from 'react'
import { cx, css } from '@emotion/css'

import { genTransitionMixin } from '../../mixins/transitions.mixin'
import { Text4RegularMixin } from '../../mixins/typography.mixin'
import { isDef } from '../../types/lang.types'

import { InputProps } from './input.types'

const InputInternal = (props: InputProps, ref: React.ForwardedRef<HTMLInputElement>) => {
  const { className, error, ...restProps } = props

  return <input className={cx(wrapperCss, { [wrapperErrorCss]: isDef(error) })} ref={ref} {...restProps} />
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(InputInternal)

const wrapperCss = css`
  ${Text4RegularMixin};
  ${genTransitionMixin('border-color')};
  width: 100%;
  height: var(--spacing-40);
  padding: var(--spacing-8);
  border: 1px solid var(--background-tertiary);
  border-radius: 0;
  background: transparent;
  color: var(--text-primary);
  position: relative;
  outline: none;

  &::placeholder {
    color: var(--text-secondary);
  }

  &:focus {
    border-color: var(--system-status-success);
  }
`

const wrapperErrorCss = css`
  border-color: var(--system-status-error);

  &:focus {
    border-color: var(--system-status-error);
  }
`
