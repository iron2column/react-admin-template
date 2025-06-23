import Header from '@/components/Header'
import Sidebar from '@/components/Sidebar'
import { Outlet } from 'react-router-dom'

export default function RootLayout() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* 顶部导航栏 */}
      <Header />

      <section className='flex flex-1'>
        {/* 侧边栏 */}
        <Sidebar />

        {/* 内容区 */}
        <main>
          <Outlet />
        </main>
      </section>
    </div>
  )
}
