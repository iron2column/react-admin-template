import SunmoonThemeMode from './toggleThemeMode/SunmoonThemeMode'
import { Separator } from '@/components/ui/separator'
import { SidebarTrigger } from './ui/sidebar'

export default function Header() {
  return (
    <div className="h-14 bg-background flex justify-between items-center px-4 border-b border-gray/10 dark:border-white/10">
      <section id="leftArea" className="flex h-5 items-center space-x-4">
        {/* 侧边栏开关 */}
        <SidebarTrigger />

        <Separator orientation="vertical" />

        {/* TODO: 面包屑 */}
      </section>


      <section id="rightArea">
        {/* 暗黑模式开关 */}
        <SunmoonThemeMode />
      </section>
    </div>
  )
}
