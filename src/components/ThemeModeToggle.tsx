import { useState, useEffect } from 'react'

export default function ThemeModeToggle() {
  const [isDark, setIsDark] = useState(() => {
    const theme = localStorage.getItem('themeMode')
    return theme === 'dark'
  })

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark')
      localStorage.setItem('themeMode', 'dark')
    } else {
      document.documentElement.classList.remove('dark')
      localStorage.setItem('themeMode', 'light')
    }
  }, [isDark]) // 当isDark变化时更新DOM

  const toggleTheme = () => {
    setIsDark(!isDark)
  }

  return (
    // 不包含任何样式以便嵌入到自定义组件中
    <p onClick={toggleTheme}>切换为{isDark ? '亮色' : '暗色'}模式</p>
  )
}
