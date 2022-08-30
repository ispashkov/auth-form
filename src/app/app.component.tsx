import * as React from 'react'
import { Global, css } from '@emotion/react'
import { useFormik } from 'formik'

import { SignInFormValues } from '../components/sign-in-form/sign-in-form.types'
import { genSignInFormValidationSchema } from '../components/sign-in-form/sign-in-form.utils'
import { SignInWidget } from '../components/sign-in-widget/sign-in-widget.component'
import { HBoxCCMixin } from '../mixins/flex-layout.mixin'
import { GlobalCss } from '../mixins/global.mixin'

export const App: React.FC = () => {
  const [loading, setLoading] = React.useState<boolean>(false)

  const { values, errors, touched, handleChange, handleBlur, handleSubmit, isValid, dirty } =
    useFormik<SignInFormValues>({
      initialValues: {
        email: '',
        password: '',
      },
      validationSchema: genSignInFormValidationSchema(),
      validateOnMount: true,
      validateOnChange: true,
      validateOnBlur: true,
      onSubmit: (values: SignInFormValues) => {
        setLoading(true)

        new Promise(resolve => {
          setTimeout(resolve, 3000)
        }).then(() => setLoading(false))
      },
    })

  return (
    <div css={wrapperCss}>
      <Global styles={GlobalCss} />
      <SignInWidget
        values={values}
        errors={errors}
        touched={touched}
        isValid={isValid}
        isLoading={loading}
        isDirty={dirty}
        onChange={handleChange}
        onBlur={handleBlur}
        onSubmit={handleSubmit}
      />
    </div>
  )
}

const wrapperCss = css`
  ${HBoxCCMixin};
  height: 100vh;
  padding: var(--spacing-20);
`
