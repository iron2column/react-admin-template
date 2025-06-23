import { SidebarProvider } from '@/components/ui/sidebar'
import Header from '@/components/Header'
import { Outlet } from 'react-router-dom'
import AppSidebar from '@/components/appSidebar/AppSidebar'

export default function RootLayout() {
  return (
    <SidebarProvider defaultOpen={true}>
      {/* 侧边栏 */}
      <AppSidebar />

      {/* 右侧内容区 */}
      <main className='flex-1'>
        {/* 头部 */}
        <Header />  

        {/* 内容 */}
        <Outlet />
      </main>
    </SidebarProvider>
  )
}
