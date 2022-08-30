import * as React from 'react'
import { css } from '@emotion/react'

import { VBoxMixin } from '../../mixins/flex-layout.mixin'
import { genMediumShadowMixin } from '../../mixins/shadows.mixin'
import { Text4RegularMixin, Text4SemiBoldMixin, Title1BlackMixin } from '../../mixins/typography.mixin'
import { WidgetMixin } from '../../mixins/widget.mixin'
import { t, tComponent } from '../../utils/i18n.utils'
import { SignInForm } from '../sign-in-form/sign-in-form.component'
import { SignInFormProps } from '../sign-in-form/sign-in-form.types'

export const SignInWidget: React.FC<SignInFormProps> = props => {
  const { className } = props
  const { values, errors, touched } = props
  const { onChange, onBlur, onSubmit } = props
  const { isValid, isDirty, isLoading } = props

  return (
    <div css={wrapperCss}>
      <div css={[widgetCss, signInWidgetCss]} className={className}>
        <h1 css={titleCss}>{t('Sign In')}</h1>

        <SignInForm
          values={values}
          errors={errors}
          touched={touched}
          isValid={isValid}
          isDirty={isDirty}
          onChange={onChange}
          onBlur={onBlur}
          onSubmit={onSubmit}
          isLoading={isLoading}
        />
      </div>

      <div css={[widgetCss, singUpWidgetCss]}>
        {tComponent("Don't have an account? {{link}}", {
          link: (
            <a css={linkCss} href="/Users/ilyapashkov/Projects/auth-form/public">
              {t('Sign Up')}
            </a>
          ),
        })}
      </div>
    </div>
  )
}

const wrapperCss = css`
  ${VBoxMixin};
  min-width: 320px;
  gap: var(--spacing-16);
`

const widgetCss = css`
  ${WidgetMixin};
  ${Text4RegularMixin};
  ${genMediumShadowMixin(0, 0, 0, 0.05)}
`

const signInWidgetCss = css`
  padding: var(--spacing-24) var(--spacing-32);
`

const singUpWidgetCss = css`
  padding: var(--spacing-20) var(--spacing-32);
  text-align: center;
`

const titleCss = css`
  ${Title1BlackMixin};
  margin-bottom: var(--spacing-24);
  text-align: center;
`

const linkCss = css`
  ${Text4SemiBoldMixin};
  color: var(--system-primary-blue);
`
