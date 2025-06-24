import type { DBSchema } from 'idb'

export interface AppDBSchema extends DBSchema {
  preferences: {
    key: string
    value: unknown
  }
  menuTree: {
    key: string
    value: unknown
  }
}