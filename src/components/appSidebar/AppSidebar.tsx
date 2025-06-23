import { Sidebar } from '@/components/ui/sidebar'
import AppSidebarHeader from './AppSidebarHeader'
import AppSidebarContent from './AppSidebarContent'
import AppSidebarFooter from './AppSidebarFooter'

export default function AppSidebar() {
  return (
    <Sidebar variant="sidebar" collapsible="icon">
      {/* 头部 */}
      <AppSidebarHeader />

      {/* 内容 */}
      <AppSidebarContent />

      {/* 底部 */}
      <AppSidebarFooter />
    </Sidebar>
  )
}
