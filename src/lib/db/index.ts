// src/lib/db/index.ts
import { openDB } from 'idb'
import type { IDBPDatabase } from 'idb'
import type { AppDBSchema } from './schema/index'
import debounce from 'lodash.debounce'

const DB_NAME = 'app-storage'
const DB_VERSION = 1

let dbPromise: Promise<IDBPDatabase<AppDBSchema>>

export const initDB = () => {
  if (!dbPromise) {
    dbPromise = openDB<AppDBSchema>(DB_NAME, DB_VERSION, {
      upgrade(db) {
        if (!db.objectStoreNames.contains('preferences')) {
          db.createObjectStore('preferences')
        }
        if (!db.objectStoreNames.contains('menuTree')) {
          db.createObjectStore('menuTree')
        }
      },
    })
  }
  return dbPromise
}

/**
 * 创建防抖写入器
 * @param writeFn 写入函数
 * @param delay 防抖延迟时间
 * @returns 
 */
export function createDebouncedWriter(
  writeFn: (key: string, value: unknown) => Promise<void>,
  delay = 300
) {
  // 缓存
  const cache = new Map<string, (val: unknown) => void>()

  return (key: string, value: unknown) => {
    if (!cache.has(key)) {
      // 缓存不存在，创建防抖写入器
      const fn = debounce(() => { writeFn(key, value) }, delay)
      // 缓存防抖函数
      cache.set(key, fn)
    }
    // 执行防抖函数
    cache.get(key)?.(value)
  }
}