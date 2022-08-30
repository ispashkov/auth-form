import * as React from 'react'
import reactStringReplace from 'react-string-replace'

import { ComponentTranslationParams, StringTranslationParams, Term } from '../types/i18n.types'
import { isDef } from '../types/lang.types'

const trRegExp: RegExp = /{{\s*([a-zA-Z0-9$_-]+)\s*}}/gi

export function t(term: Term, params?: StringTranslationParams): string {
  return getStringTranslationForLang(term, params) || term
}

function getStringTranslationForLang(term: Term, params?: StringTranslationParams): string | null {
  return params ? applyStringParams(term, params) : term
}

export function applyStringParams(tr: Term, params: StringTranslationParams): string {
  const keys = Object.keys(params)
  return keys.reduce((result: string, key: string) => result.replace(genParamKey(key), params[key].toString()), tr)
}

function genParamKey(key: string): RegExp {
  return new RegExp(`{{\\s*${key}\\s*}}`, 'gi')
}

// region ---- component translation
export function tComponent(term: Term, params?: ComponentTranslationParams): React.ReactFragment {
  return getComponentTranslationForLang(term, params) || term
}

function getComponentTranslationForLang(term: Term, params?: ComponentTranslationParams): React.ReactFragment {
  return params ? applyComponentTranslationParams(term, params) : term
}

export function applyComponentTranslationParams(
  tr: Term,
  params: ComponentTranslationParams,
  fallback: string | number | React.ReactNode | null = null
): React.ReactFragment {
  return reactStringReplace(tr, trRegExp, (match: string, index: number) => {
    const value = params[match] || fallback
    if (isDef(value)) {
      return React.isValidElement(value) ? React.cloneElement(value, { key: `${match}-${index}` }) : value
    }
    return match
  })
}
