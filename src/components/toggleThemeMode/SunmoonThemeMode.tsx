import { Button } from '@/components/ui/button'
import { useThemeMode } from '@/lib/theme-mode-context'
import { Sun, Moon } from 'lucide-react'

export default function SunmoonThemeMode({ variant = 'outline' }: { variant?: 'outline' | 'ghost' }) {
  const { themeMode, setThemeMode } = useThemeMode()

  return (
    <Button
      variant={variant}
      size="icon"
      onClick={() => setThemeMode(themeMode === 'dark' ? 'light' : 'dark')}
    >
      <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
    </Button>
  )
}
