import '@/assets/styles/login-background.css'
import { Columns3Cog } from 'lucide-react'
import { Button } from '@/components/ui/button'
import SunmoonThemeMode from '@/components/toggleThemeMode/SunmoonThemeMode'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
} from '@/components/ui/dropdown-menu'
import { PanelLeft, PanelRight, SquareSquare } from 'lucide-react'
import { usePreferencesStore } from '@/stores/usePreferencesStore'

export default function LoginLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const currentLoginLayout = usePreferencesStore(
    (state) => state.loginPanelLayout
  )

  const renderPanel = () => {
    if (currentLoginLayout === 'left') {
      return <LeftPanelWrapper>{children}</LeftPanelWrapper>
    }
    if (currentLoginLayout === 'center') {
      return <CenterPanelWrapper>{children}</CenterPanelWrapper>
    }
    if (currentLoginLayout === 'right') {
      return <RightPanelWrapper>{children}</RightPanelWrapper>
    }
  }

  return (
    <div id="LoginLayoutContainer" className="h-screen w-screen relative">
      {renderPanel()}

      <ControlCapsule />
    </div>
  )
}

function LeftPanelWrapper({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen w-screen items-center login-background-deep">
      <section className="w-full lg:w-2/5 h-full flex items-center justify-center transition-al bg-white dark:bg-slate-900 z-10 relative">
        {children}
      </section>

      <section className="hidden lg:flex w-3/5 h-full items-center justify-center transition-all relative">
        <div className="absolute login-background w-full h-full opacity-90 dark:opacity-30"></div>
        <section className='space-y-8 flex flex-col items-start relative z-10'>
          <div className="text-7xl font-bold text-neutral-700/80 dark:text-white/90">Hello :)</div>
          <div className="text-7xl font-bold text-neutral-700/80 dark:text-white/90">React Admin Template</div>
        </section>
      </section>
    </div>
  )
}

function CenterPanelWrapper({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen w-screen items-center">
      <div className="absolute login-background w-full h-full opacity-90 dark:opacity-30"></div>
      <section className="w-full h-full flex items-center justify-center transition-all relative z-10">
        <section className="w-full sm:w-4/5 md:w-2/3 lg:w-3/4 xl:w-2/4 2xl:w-1/3 bg-background  dark:bg-slate-800/90 border rounded-lg px-6 py-10 shadow-lg transition-all">
          {children}
        </section>
      </section>
    </div>
  )
}

function RightPanelWrapper({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-row-reverse h-screen w-screen items-center">
      <section className="w-full lg:w-2/5 h-full flex items-center justify-center transition-all bg-white dark:bg-slate-900 z-10 relative">
        {children}
      </section>

      <section className="hidden lg:flex w-3/5 h-full items-center justify-center transition-all relative">
        <div className="absolute login-background w-full h-full opacity-90 dark:opacity-30"></div>
        <section className='space-y-8 flex flex-col items-start relative z-10'>
          <div className="text-7xl font-bold text-neutral-700/80 dark:text-white/90">Hello :)</div>
          <div className="text-7xl font-bold text-neutral-700/80 dark:text-white/90">React Admin Template</div>
        </section>
      </section>
    </div>
  )
}

/**
 * 控制胶囊
 * 包含登录面板布局控制器和主题模式控制器
 */
function ControlCapsule() {
  return (
    <div className="absolute top-0 right-0 border-1 m-5 py-1 px-2 rounded-4xl flex items-center justify-evenly z-10">
      <LoginPanelLayoutController />

      <SunmoonThemeMode variant="ghost" />
    </div>
  )
}

/**
 * 控制登录面板的布局
 */
function LoginPanelLayoutController() {
  const currentLoginLayout = usePreferencesStore(
    (state) => state.loginPanelLayout
  )
  const update = usePreferencesStore((state) => state.update)
  const setCurrentLoginLayout = (value: 'left' | 'center' | 'right') => {
    update('loginPanelLayout', value)
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost">
          <Columns3Cog className="w-2 h-2" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-32 min-w-min">
        <DropdownMenuRadioGroup
          value={currentLoginLayout}
          onValueChange={(value) =>
            setCurrentLoginLayout(value as 'left' | 'center' | 'right')
          }
        >
          <DropdownMenuRadioItem value="left">
            <PanelLeft className="w-2 h-2" />
            <p>居左</p>
          </DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="center">
            <SquareSquare className="w-2 h-2" />
            <p>居中</p>
          </DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="right">
            <PanelRight className="w-2 h-2" />
            <p>居右</p>
          </DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
