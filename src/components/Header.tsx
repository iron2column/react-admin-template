import SunmoonThemeMode from './toggleThemeMode/SunmoonThemeMode'

export default function Header() {
  return (
    <div className="h-16 bg-background flex justify-between items-center px-4">
      <div>管理后台</div>

      <div>
        {/* 暗黑模式开关 */}
        <SunmoonThemeMode />

        {/* 通知图标 */}

        {/* 头像 */}

        {/* 用户名 */}
      </div>
    </div>
  )
}
