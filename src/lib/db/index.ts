// src/lib/db/index.ts
import { openDB } from 'idb'
import type { IDBPDatabase } from 'idb'
import type { AppDBSchema } from './schema/index'

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