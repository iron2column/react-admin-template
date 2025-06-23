import ThemeModeToggle from './components/ThemeModeToggle'
import { Button } from '@/components/ui/button'

export default function App() {
  return (
    <div>
      <div id="testThemeMode" className="bg-white dark:bg-gray-800">
        <h1>测试主题模式</h1>
      </div>
      <Button>11</Button>
      <Button>
        <ThemeModeToggle />
      </Button>
    </div>
  )
}
