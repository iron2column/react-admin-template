import { create } from 'zustand'
import * as prefsDB from '@/lib/db/modules/preferences'

// 定义偏好状态类型
interface PreferencesState {
  themeMode: 'light' | 'dark'
  loginPanelLayout: 'left' | 'center' | 'right'
  init: () => Promise<void>
  update: (key: string, value: unknown) => Promise<void>
  reset: () => Promise<void>
}

export const usePreferencesStore = create<PreferencesState>((set) => ({
  /**
   * 主题模式
   */
  themeMode: 'light',

  /**
   * 登录面板布局
   */
  loginPanelLayout: 'left',

  /**
   * 从db中获取持久化的偏好并设置到store中，
   * 若没有则设置默认值
   */
  init: async () => {
    // 从db中获取持久化的偏好
    const prefs = await prefsDB.getAllPreferences()
    // 设置到store中
    set({
      themeMode: (prefs.themeMode as 'light' | 'dark') || 'light',
      loginPanelLayout: (prefs.loginPanelLayout as 'left' | 'center' | 'right') || 'left',
    })
  },

  /**
   * 更新偏好
   * @param key 偏好键
   * @param value 偏好值
   */
  update: async (key: string, value: unknown) => {
    // 更新db中的偏好
    await prefsDB.setPreference(key, value)
    // 更新store中的偏好
    set({ [key]: value })
  },

  /**
   * 重置偏好
   */
  reset: async () => {
    // 重置db中的偏好
    await prefsDB.resetPreferences()
    // 重置store中的偏好
    set({
      themeMode: 'light',
      loginPanelLayout: 'left',
    })
  },
}))