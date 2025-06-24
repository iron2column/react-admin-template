import { createDebouncedWriter, initDB } from '../index'
import { defaultPreferences } from '@/config/defaultPreferences'

/**
 * 设置偏好
 * @param key 
 * @param value 
 */
export const setPreference = async (key: string, value: unknown) => {
  const db = await initDB()

  await db.put('preferences', value, key)
}

const _debounced = createDebouncedWriter(setPreference, 500)

/**
 * 防抖写入偏好
 */
export const setPreferenceDebounced = (key: string, value: unknown) => {
  _debounced(key, value)
}

/**
 * 获取偏好
 * @param key 
 * @returns 
 */
export const getPreference = async (key: string) => {
  const db = await initDB()
  return db.get('preferences', key)
}

/**
 * 获取所有偏好
 * @returns 
 */
export const getAllPreferences = async () => {
  const db = await initDB()
  const tx = db.transaction('preferences', 'readonly')
  const store = tx.objectStore('preferences')
  const keys = await store.getAllKeys()
  const result: Record<string, unknown> = {}
  for (const key of keys) {
    result[key as string] = await store.get(key)
  }
  // TODO:合并默认偏好和持久化的偏好, 避免丢失默认偏好
  return result
}

/**
 * 重置偏好
 */
export const resetPreferences = async () => {
  const db = await initDB()
  const tx = db.transaction('preferences', 'readwrite')
  const store = tx.objectStore('preferences')
  await Promise.all(
    Object.entries(defaultPreferences).map(([key, value]) => {
      return store.put(value, key)
    })
  )
  await tx.done
} 
