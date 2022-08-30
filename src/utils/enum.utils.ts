import { isNotNaN, Nullable } from '../types/lang.types'

export function getNumEnumValues(obj: object): number[] {
  return Object.keys(obj)
    .map((k: string) => parseInt(k, 10))
    .filter(isNotNaN)
}

export function isNumEnumValue(obj: object, value: any): boolean {
  return getNumEnumValues(obj).indexOf(value) !== -1
}

export function validateNumEnumValue<T>(obj: Nullable<object>, value: any): T | null {
  return obj && isNumEnumValue(obj, value) ? (value as T) : null
}

export function getStrEnumValues<T>(obj: object): T[] {
  const result = []
  for (const key in obj) {
    result.push((obj as { [key: string]: T })[key] as T)
  }
  return result
}

export function getStrEnumKeys<T>(obj: object): (keyof T)[] {
  const result = []
  for (const key in obj) {
    result.push(key as keyof T)
  }
  return result
}

export function isStrEnumValue<T>(obj: object, value: any): value is T {
  return getStrEnumValues<T>(obj).indexOf(value) !== -1
}

export function isStrEnumKey<T>(obj: object, value: any): value is keyof T {
  return getStrEnumKeys<T>(obj).indexOf(value) !== -1
}

export function validateStrEnumValue<T>(obj: Nullable<object>, value: any): T | null {
  return obj && isStrEnumValue<T>(obj, value) ? (value as T) : null
}
