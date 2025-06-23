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
   - 初始值从 `document.documentElement.classList` 获取
3. 初始化组件时从 `localStorage` 获取主题状态并更新
4. 实现切换主题逻辑
   1. 更新 `document.documentElement.classList`
   2. 更新主题状态逻辑
   3. 将主题状态保存到 `localStorage`

```tsx
// 1. 创建一个切换主题的按钮组件
export default function ThemeModeToggle() {
  // 2. 使用 `useState` 管理主题状态
  const [isDark, setIsDark] = useState(() => {
    return document.documentElement.classList.contains('dark')
  })

  // 3. 初始化组件时从 `localStorage` 获取主题状态并更新
  useEffect(() => {
    const theme = localStorage.getItem('themeMode')
    if(theme === 'dark'){
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
    <button onClick={toggleTheme}>{isDark ? 'Light Mode' : 'Dark Mode'}</button>
  )
}
```
