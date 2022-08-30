import { css } from '@emotion/react'

export const genSmallShadowMixin = (r: number, g: number, b: number, alpha: number = 0.1) => css`
  box-shadow: 0 2px 6px rgba(${r}, ${g}, ${b}, ${alpha});
`

export const genMediumShadowMixin = (r: number, g: number, b: number, alpha: number = 0.3) => css`
  box-shadow: 0 5px 12px rgba(${r}, ${g}, ${b}, ${alpha});
`

export const genLargeShadowMixin = (r: number, g: number, b: number, alpha: number = 0.08) => css`
  box-shadow: 0 10px 35px rgba(${r}, ${g}, ${b}, ${alpha});
`
