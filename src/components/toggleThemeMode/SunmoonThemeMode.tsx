import { Button } from '@/components/ui/button'
import { usePreferencesStore } from '@/stores/usePreferencesStore'
import { Sun, Moon } from 'lucide-react'

export default function SunmoonThemeMode({ variant = 'outline' }: { variant?: 'outline' | 'ghost' }) {
  const themeMode = usePreferencesStore(state => state.themeMode)
  const setThemeMode = usePreferencesStore(state => state.update)

  const toggleThemeMode = () => {
    const next = themeMode === 'dark' ? 'light' : 'dark'
    setThemeMode('themeMode', next)

    const isDark = next === 'dark'
    if (isDark) {
      document.documentElement.classList.add('dark')
      localStorage.setItem('themeMode', 'dark')
    } else {
      document.documentElement.classList.remove('dark')
      localStorage.setItem('themeMode', 'light')
    }
  }

  return (
    <Button
      variant={variant}
      size="icon"
      onClick={toggleThemeMode}
    >
      <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
    </Button>
  )
}
