import * as React from 'react'
import { css, cx } from '@emotion/css'
import { keyframes } from '@emotion/react'

import { LoaderSize } from './loader.types'

interface Props {
  className?: string
  size?: LoaderSize
}

export const Loader: React.FC<Props> = props => {
  const { className } = props
  const { size = LoaderSize.H8 } = props

  const wrapperCss = cx(wrapperBaseCss, sizeToWrapperCssMap[size], className)
  const dotCss = cx(dotBaseCss, sizeToDotCssMap[size])

  return (
    <div className={wrapperCss}>
      <div className={dotCss} />
      <div className={dotCss} />
      <div className={dotCss} />
    </div>
  )
}

const flashing = keyframes`
  0% {
    background-color: currentColor;
  }
  
  100% {
    background-color: transparent;
  }
`

const wrapperBaseCss = css`
  display: inline-grid;
  position: relative;
  color: var(--system-primary-blue);
`

const wrapperH8SizeCss = css`
  grid-template-columns: repeat(3, var(--spacing-8));
  grid-column-gap: var(--spacing-8);
`

const wrapperH16SizeCss = css`
  grid-template-columns: repeat(3, var(--spacing-16));
  grid-column-gap: var(--spacing-20);
`

const dotBaseCss = css`
  border-radius: 50%;
  background-color: currentColor;
  color: currentColor;

  &:nth-child(1) {
    animation: ${flashing} 0.5s infinite alternate;
    animation-delay: 0s;
  }

  &:nth-child(2) {
    animation: ${flashing} 0.5s infinite linear alternate;
    animation-delay: 0.25s;
  }

  &:nth-child(3) {
    animation: ${flashing} 0.5s infinite alternate;
    animation-delay: 0.5s;
  }
`

const dotH8SizeCss = css`
  width: var(--spacing-8);
  height: var(--spacing-8);
`

const dotH16SizeCss = css`
  width: var(--spacing-16);
  height: var(--spacing-16);
`

const sizeToWrapperCssMap: Record<LoaderSize, string> = {
  [LoaderSize.H8]: wrapperH8SizeCss,
  [LoaderSize.H16]: wrapperH16SizeCss,
}

const sizeToDotCssMap: Record<LoaderSize, string> = {
  [LoaderSize.H8]: dotH8SizeCss,
  [LoaderSize.H16]: dotH16SizeCss,
}
