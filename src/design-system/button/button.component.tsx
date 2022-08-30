import * as React from 'react'
import { css, cx } from '@emotion/css'

import { HBoxCCMixin } from '../../mixins/flex-layout.mixin'
import { genMediumShadowMixin } from '../../mixins/shadows.mixin'
import { genTransitionMixin } from '../../mixins/transitions.mixin'
import { Caption2BoldMixin, Text3SemiBoldMixin } from '../../mixins/typography.mixin'
import { Loader } from '../loader/loader.component'
import { Polymorphic } from '../polymorphic/polymorphic.component'

import { ButtonColor, ButtonProps, ButtonSize } from './button.types'

export const Button = <C extends React.ElementType = 'button'>(props: ButtonProps<C>) => {
  const {
    as = 'button',
    size = ButtonSize.H40,
    color = ButtonColor.PrimaryBlue,
    disabled = false,
    block = false,
    loading = false,
    className,
    children,
    ...restProps
  } = props

  return (
    <Polymorphic
      className={cx(wrapperCss, wrapperSizeCssMap[size], wrapperColorCssMap[color], { [blockCss]: block }, className)}
      as={as}
      disabled={disabled || loading}
      {...restProps}
    >
      {loading ? <Loader className={loaderCss} /> : children}
    </Polymorphic>
  )
}

const wrapperCss = css`
  ${HBoxCCMixin};
  ${genTransitionMixin(['background-color', 'opacity', 'color'])};
  ${Text3SemiBoldMixin};
  display: inline-flex;
  flex: 0 0 auto;
  padding: var(--spacing-12) var(--spacing-28);
  background: none;
  border: none;
  border-radius: 0;
  overflow: hidden;
  color: var(--text-primary);
  white-space: nowrap;
  cursor: pointer;
  box-sizing: border-box;
  position: relative;

  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }
`

const primaryBlueColorCss = css`
  background-color: var(--system-primary-blue);
  color: var(--text-contrast);
  ${genMediumShadowMixin(69, 170, 242)}
  &:hover:not(:disabled) {
    background-color: var(--system-primary-blue-hover);
  }
  &:active {
    background-color: var(--system-primary-blue-active);
    box-shadow: none;
  }
`

const primaryOrangeColorCss = css`
  background-color: var(--system-primary-orange);
  color: var(--text-contrast);
  ${genMediumShadowMixin(255, 108, 41)}
  &:hover:not(:disabled) {
    background-color: var(--system-primary-orange-hover);
  }
  &:active {
    background-color: var(--system-primary-orange-active);
    box-shadow: none;
  }
`

const secondaryColorCss = css`
  background-color: var(--background-primary);
  color: var(--text-primary);
  ${genMediumShadowMixin(152, 159, 163)}
  &:hover:not(:disabled) {
    background-color: var(--background-primary);
    color: var(--text-primary-hover);
  }
  &:active {
    background-color: var(--background-primary);
    box-shadow: none;
  }
`

const ghostColorCss = css`
  background-color: transparent;
  color: var(--text-primary);
  &:hover:not(:disabled) {
    background-color: transparent;
    color: var(--text-primary-hover);
  }
  &:active {
    background-color: transparent;
    box-shadow: none;
  }
`

const H40SizeCss = css`
  ${Caption2BoldMixin};
  height: 40px;
  padding: 8px 20px;
`

const loaderCss = css`
  color: currentColor;
`

const blockCss = css`
  display: flex;
  width: 100%;
`

const wrapperColorCssMap: Record<ButtonColor, string> = {
  [ButtonColor.PrimaryBlue]: primaryBlueColorCss,
  [ButtonColor.PrimaryOrange]: primaryOrangeColorCss,
  [ButtonColor.Secondary]: secondaryColorCss,
  [ButtonColor.Ghost]: ghostColorCss,
}

const wrapperSizeCssMap: Record<ButtonSize, string> = {
  [ButtonSize.H40]: H40SizeCss,
}
