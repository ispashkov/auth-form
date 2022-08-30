import * as React from 'react'
import { FormikErrors, FormikTouched } from 'formik'

export type SignInFormValues = {
  email: string
  password: string
}

export interface SignInFormProps {
  className?: string
  values: SignInFormValues
  errors: FormikErrors<SignInFormValues>
  touched: FormikTouched<SignInFormValues>
  isValid: boolean
  isLoading: boolean
  isDirty: boolean
  onChange: React.ChangeEventHandler<HTMLInputElement>
  onBlur: React.FocusEventHandler<HTMLInputElement>
  onSubmit: React.FormEventHandler<HTMLFormElement>
}
