import { css } from '@emotion/react'
import emotionNormalize from 'emotion-normalize'

import { ColorsMixin } from './colors.mixin'
import { SpacingMixin } from './spacing.mixin'

const HtmlAndBodyGlobalCss = css`
  outline: none;
  margin: 0;
  width: 100%;
  height: 100%;
`

const HtmlOnlyGlobalCss = css`
  overflow-x: hidden;
  font-family: 'Nunito Sans', sans-serif;
  -webkit-font-smoothing: subpixel-antialiased;
`

const BodyOnlyGlobalCss = css`
  background: var(--background-secondary);
  color: var(--text-primary);
`

export const GlobalCss = css`
  ${emotionNormalize};
  html,
  body {
    ${HtmlAndBodyGlobalCss};
  }
  html {
    ${HtmlOnlyGlobalCss};
  }
  body {
    ${BodyOnlyGlobalCss}
  }
  html * {
    box-sizing: border-box;
  }
  :root {
    ${ColorsMixin};
    ${SpacingMixin};
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin: 0;
  }
  p {
    margin: 0;
  }
  a {
    text-decoration: none;
    color: unset;
  }
`
