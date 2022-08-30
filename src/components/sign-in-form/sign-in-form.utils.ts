import * as Yup from 'yup'

import { SignInFormValues } from './sign-in-form.types'

export function genSignInFormValidationSchema(): Yup.SchemaOf<SignInFormValues> {
  return Yup.object({
    email: Yup.string().required(),
    password: Yup.string().required(),
  })
}
