import * as React from 'react'

export type Term = string

export type StringTranslationParams = { [key: string]: string | number }
export type ComponentTranslationParams = { [key: string]: string | number | React.ReactNode }
