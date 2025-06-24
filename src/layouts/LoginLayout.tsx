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
  const currentLoginLayout = usePreferencesStore((state) => state.loginPanelLayout)

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
    <div className="flex h-screen w-screen items-center">
      <section className="w-full lg:w-2/5 h-full flex items-center justify-center transition-all">
        {children}
      </section>

      <section className="hidden lg:flex w-3/5 h-full items-center justify-center transition-all">
        <div className="text-neutral-700">开箱即用</div>
      </section>
    </div>
  )
}

function CenterPanelWrapper({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen w-screen items-center">
      <section className="w-full h-full flex items-center justify-center transition-al">
        <section className="w-full md:w-2/3 lg:w-1/2 xl:w-1/3 bg-background border-1 rounded-lg px-6 py-10 pb-20">
          {children}
        </section>
      </section>
    </div>
  )
}

function RightPanelWrapper({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-row-reverse h-screen w-screen items-center">
      <section className="w-full lg:w-2/5 h-full flex items-center justify-center transition-all">
        {children}
      </section>

      <section className="hidden lg:flex w-3/5 h-full items-center justify-center transition-all">
        <div className="text-neutral-700">开箱即用</div>
      </section>
    </div>
  )
}

function ControlCapsule() {
  return (
    <div className="absolute top-0 right-0 border-1 m-5 py-1 px-2 rounded-4xl flex items-center justify-evenly">
      <LoginPanelLayoutController />

      <SunmoonThemeMode variant="ghost" />
    </div>
  )
}

function LoginPanelLayoutController() {
  const currentLoginLayout = usePreferencesStore((state) => state.loginPanelLayout)
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
          onValueChange={(value) => setCurrentLoginLayout(value as 'left' | 'center' | 'right')}
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
