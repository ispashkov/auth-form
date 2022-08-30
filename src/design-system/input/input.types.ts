import * as React from 'react'

import { NString } from '../../types/lang.types'

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: NString
}
