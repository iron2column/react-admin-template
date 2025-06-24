import { RouterProvider } from 'react-router-dom'
import router from './routes'
import { usePreferencesStore } from '@/stores/usePreferencesStore'
import { useEffect } from 'react'

export default function App() {
  // 初始化偏好模块
  const initPreferences = usePreferencesStore((state) => state.init)
  useEffect(() => {
    initPreferences()
  }, [])

  return <RouterProvider router={router} />
}
