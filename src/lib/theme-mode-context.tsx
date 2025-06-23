import { createContext, useContext, useEffect, useState } from 'react'

// 主题模式
type ThemeMode = 'light' | 'dark'

// 主题模式上下文
const ThemeModeContext = createContext<{
  themeMode: ThemeMode,
  setThemeMode: (t: ThemeMode) => void,
}>({
  themeMode: 'light',
  setThemeMode: () => {},
})

// 主题模式提供者
export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [themeMode, setThemeMode] = useState<ThemeMode>(() => {
    return localStorage.getItem('themeMode') as ThemeMode || 'light'
  })

  useEffect(() => {
    const isDark = themeMode === 'dark'
    if (isDark) {
      document.documentElement.classList.add('dark')
      localStorage.setItem('themeMode', 'dark')
    } else {
      document.documentElement.classList.remove('dark')
      localStorage.setItem('themeMode', 'light')
    }
  }, [themeMode])

  return <ThemeModeContext.Provider value={{ themeMode, setThemeMode }}>{children}</ThemeModeContext.Provider>
}

// 主题模式钩子
export const useThemeMode = () => useContext(ThemeModeContext)
