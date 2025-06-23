import ThemeModeToggle from './components/ThemeModeToggle'

export default function App() {
  return (
    <div>
      <ThemeModeToggle />
      <div id="testThemeMode" className="bg-white dark:bg-gray-800">
        <h1>测试主题模式</h1>
      </div>
    </div>
  )
}
