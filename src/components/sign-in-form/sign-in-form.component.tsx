import * as React from 'react'
import { css } from '@emotion/react'

import { Button } from '../../design-system/button/button.component'
import { Input } from '../../design-system/input/input.component'
import { VBoxSCMixin } from '../../mixins/flex-layout.mixin'
import { Text4RegularMixin } from '../../mixins/typography.mixin'
import { genErrors } from '../../utils/forms.utils'
import { t } from '../../utils/i18n.utils'

import { SignInFormProps } from './sign-in-form.types'

export const SignInForm: React.FC<SignInFormProps> = props => {
  const { className } = props
  const { values, touched, errors } = props
  const { onChange, onBlur, onSubmit } = props
  const { isValid = false, isDirty = false, isLoading = false } = props

  return (
    <form css={wrapperCss} className={className} onSubmit={onSubmit}>
      <div css={containerCss}>
        <Input
          type="text"
          name="email"
          placeholder={t('E-mail')}
          value={values.email}
          error={genErrors(errors, touched, 'email', isDirty)}
          onChange={onChange}
          onBlur={onBlur}
        />

        <Input
          name="password"
          placeholder={t('Password')}
          value={values.password}
          error={genErrors(errors, touched, 'password', isDirty)}
          onChange={onChange}
          onBlur={onBlur}
        />
      </div>

      <Button type="submit" css={submitButtonCss} loading={isLoading} disabled={!isValid} block>
        {t('Sign In')}
      </Button>

      <div css={footerCss}>
        <a css={forgotPasswordCss} href="/">
          {t('Forgot password?')}
        </a>
      </div>
    </form>
  )
}

const wrapperCss = css`
  display: block;
  text-align: center;
`

const containerCss = css`
  display: grid;
  grid-row-gap: var(--spacing-8);
`

const footerCss = css`
  ${VBoxSCMixin};
  margin: var(--spacing-20) auto 0;
`

const submitButtonCss = css`
  margin: var(--spacing-16) auto 0;
`

const forgotPasswordCss = css`
  ${Text4RegularMixin};
  color: var(--text-primary);
`
