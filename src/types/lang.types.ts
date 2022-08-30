export type Dict<T> = { [key: string]: T }
export type EnumKey = keyof any
export type Nullable<T> = T | null | undefined
export type NString = Nullable<string>
export type NNumber = Nullable<number>
export type NBoolean = Nullable<boolean>

export function isNotNaN(value: any): boolean {
  return !isNaN(value)
}

export function isDef<T>(value: Nullable<T>): value is T {
  return value !== null && value !== undefined
}

export function isDefAndNotEmpty<T extends ArrayLike<any>>(value: Nullable<T>): value is T {
  return !!(value && value.length)
}

export function isDefAndEmpty<T extends ArrayLike<any>>(value: Nullable<T>): value is T {
  return !!(value && !value.length)
}

export function isDefAndMoreThenZero(value: Nullable<number>): value is number {
  return isDef(value) && value > 0
}

export function isBoolean(value: any): boolean {
  return value === 'true' || value === 'false'
}

export function parseBoolean(val: any): boolean {
  return val === 'true'
}
