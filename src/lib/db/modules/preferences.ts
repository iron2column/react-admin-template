import { initDB } from '../index'
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
