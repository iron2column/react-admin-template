import { RouterProvider } from 'react-router-dom'
import router from './routes'
import { usePreferencesStore } from '@/stores/usePreferencesStore'
import { useEffect } from 'react'

export default function App() {
  // 初始化偏好模块
  const initialized = usePreferencesStore((state) => state.initialized)
  const initPreferences = usePreferencesStore((state) => state.init)
  useEffect(() => {
    if (!initialized) {
      initPreferences()
    }
  }, [initialized, initPreferences])

  return <RouterProvider router={router} />
}
