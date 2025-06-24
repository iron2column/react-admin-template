import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import * as prefsDB from '@/lib/db/modules/preferences'


interface PreferencesState {
  themeMode: 'light' | 'dark'
  loginPanelLayout: 'left' | 'center' | 'right'
  initialized: boolean
}

const initialState: PreferencesState = {
  themeMode: 'dark',
  loginPanelLayout: 'left',
  initialized: false
}

/**
 * 从 db 中获取偏好作为初始值
 */
export const initPreferences = createAsyncThunk('preferences/init',
  async () => {
    const prefs = await prefsDB.getAllPreferences()
    return prefs
  }
)

/**
 * 更新某个偏好字段
 * 写入 db 后返回新值
 */
export const updatePreference = createAsyncThunk('preferences/update',
  async ({ key, value }: { key: keyof PreferencesState, value: unknown }) => {
    // TODO: 先更新状态后更新 db ？
    await prefsDB.setPreference(key, value)
    return { key, value }
  }
)

/**
 * 重置偏好
 * 重置 db 中的偏好后返回新值
 */
export const resetPreferences = createAsyncThunk('preferences/reset',
  async () => {
    // 重置 db 中的偏好
    await prefsDB.resetPreferences()
    // 重置 store 中的偏好为默认值
    const prefs = await prefsDB.getAllPreferences()
    return prefs
  }
)

// 创建 slice
const preferencesSlice = createSlice({
  name: 'preferences',
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(initPreferences.fulfilled, (state, action) => {
        Object.assign(state, action.payload)
        state.initialized = true
      })
      .addCase(updatePreference.fulfilled, (state, action) => {
        const { key, value } = action.payload
        if (key in state) {
          state[key as keyof PreferencesState] = value as never
        }
      })
      .addCase(resetPreferences.fulfilled, (state, action) => {
        Object.assign(state, action.payload)
        state.initialized = true
      })
  }
})

export default preferencesSlice.reducer