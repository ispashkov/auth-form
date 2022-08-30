import { FormikErrors, FormikTouched } from 'formik'

import { isDef } from '../types/lang.types'

export function genErrors<T extends object>(
  errors: FormikErrors<T>,
  touched: FormikTouched<T>,
  field: keyof T,
  isDirty = true
) {
  return isDirty && isDef(touched) && touched[field] ? errors[field] : null
}
