# 暗黑模式实现方案

## 一、配置 Tailwind 支持暗黑模式

编辑 `tailwind.config.ts`:

```ts
export default {
  darkMode: 'class',
  // ...
}
```

## 二、设置样式时使用 dark: 前缀

```jsx
<div className="bg-white text-black dark:bg-gray-900 dark:text-white p-4">
  Hello Tailwind Dark Mode
</div>
```

## 三、React 中实现主题切换按钮

1. 创建一个切换主题的按钮组件
2. 使用 `useState` 管理主题状态
   - 初始值从 `localStorage` 获取
3. 监听 `isDark` 变化，进行更新：
   1. 如果 `isDark` 为 `true`，则添加 `dark` 类到 `document.documentElement`
   3. 将主题状态保存到 `localStorage`
4. 实现切换主题逻辑

```tsx
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
    <button onClick={toggleTheme}>切换为{isDark ? '亮色' : '暗色'}模式</button>
  )
}

```
