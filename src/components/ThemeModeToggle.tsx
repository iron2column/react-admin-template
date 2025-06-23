import { useState, useEffect } from 'react'

// 1. 创建一个切换主题的按钮组件
export default function ThemeModeToggle() {
  // 2. 使用 `useState` 管理主题状态
  const [isDark, setIsDark] = useState(() => {
    return document.documentElement.classList.contains('dark')
  })

  // 3. 初始化组件时从 `localStorage` 获取主题状态并更新
  useEffect(() => {
    const theme = localStorage.getItem('themeMode')
    if (theme === 'dark') {
      document.documentElement.classList.add('dark')
      setIsDark(true)
    } else {
      document.documentElement.classList.remove('dark')
      setIsDark(false)
    }
  }, [])

  // 4. 实现切换主题逻辑
  const toggleTheme = () => {
    document.documentElement.classList.toggle('dark')
    setIsDark(!isDark)
    localStorage.setItem('themeMode', isDark ? 'dark' : 'light')
  }

  return (
    // 不包含任何样式以便嵌入到自定义组件中
    <button onClick={toggleTheme}>切换为{isDark ? '亮色' : '暗色'}模式</button>
  )
}
