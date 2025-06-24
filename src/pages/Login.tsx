import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Separator } from '@/components/ui/separator'
import {
  CardContent,
  CardHeader,
  CardTitle,
  CardFooter,
} from '@/components/ui/card'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
} from '@/components/ui/dropdown-menu'
import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

export default function Login() {
  const [loginType, setLoginType] = useState<string>('user')

  return (
    <div
      id="login-panel"
      className="bg-transparent w-full h-full flex flex-col items-center justify-center"
    >
      <section className="w-full max-w-sm py-10 px-6">
        <CardHeader className="space-y-1 mb-5">
          <CardTitle className="text-4xl font-bold dark:text-white">
            欢迎登录 👏
          </CardTitle>
        </CardHeader>

        <CardContent className="space-y-4">
          {/* 身份选择器 - 下拉菜单 */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="outline"
                className="w-full dark:border-slate-700 dark:bg-slate-800 flex justify-between"
              >
                {loginType === 'user' ? '用户登录' : '管理员登录'}
                <ChevronDown className="ml-2 h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-[200px]">
              <DropdownMenuRadioGroup
                value={loginType}
                onValueChange={setLoginType}
              >
                <DropdownMenuRadioItem value="user">
                  用户登录
                </DropdownMenuRadioItem>
                <DropdownMenuRadioItem value="admin">
                  管理员登录
                </DropdownMenuRadioItem>
              </DropdownMenuRadioGroup>
            </DropdownMenuContent>
          </DropdownMenu>

          {/* 账户输入 */}
          <div className="space-y-2">
            <Input
              placeholder="请输入账户"
              className="dark:bg-slate-800 dark:border-slate-700"
            />
          </div>

          {/* 密码输入 */}
          <div className="space-y-2">
            <Input
              type="password"
              placeholder="请输入密码"
              className="dark:bg-slate-800 dark:border-slate-700"
            />
          </div>

          {/* 滑块验证 */}
          <div className="w-full flex items-center justify-center">
            <div className="w-full h-8 bg-muted dark:bg-slate-800 rounded flex items-center justify-center text-muted-foreground text-sm">
              滑块验证
            </div>
          </div>

          {/* 记住账户 & 忘记密码 */}
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <input type="checkbox" className="rounded dark:bg-slate-800" />
              <span className="text-sm font-medium dark:text-slate-300">
                记住账户
              </span>
            </div>
            <Button variant="link" className="px-0 h-auto dark:text-blue-400">
              忘记密码？
            </Button>
          </div>

          {/* 登录按钮 */}
          <Button className="w-full">登录</Button>

          {/* 其他登录方式 */}
          <div className="flex flex-col gap-2">
            <Button
              variant="outline"
              className="w-full dark:border-slate-700 dark:bg-slate-800"
            >
              手机登录
            </Button>
            <Button
              variant="outline"
              className="w-full dark:border-slate-700 dark:bg-slate-800"
            >
              扫码登录
            </Button>
          </div>

          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <Separator className="w-full dark:bg-slate-700" />
            </div>
            <div className="relative flex justify-center">
              <span className="bg-white dark:bg-slate-900/60 px-2 text-xs text-muted-foreground dark:text-slate-400">
                其他登录方式
              </span>
            </div>
          </div>

          {/* 社交登录按钮 */}
          <div className="flex justify-center gap-4">
            <Button
              variant="outline"
              size="icon"
              className="rounded-full w-10 h-10 dark:border-slate-700 dark:bg-slate-800"
            >
              <svg width="20" height="20" fill="none" viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="10" fill="#1AAD19" />
                <circle cx="9" cy="11" r="1.5" fill="#fff" />
                <circle cx="15" cy="11" r="1.5" fill="#fff" />
              </svg>
              <span className="sr-only">微信</span>
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="rounded-full w-10 h-10 dark:border-slate-700 dark:bg-slate-800"
            >
              <svg width="20" height="20" fill="none" viewBox="0 0 24 24">
                <ellipse cx="12" cy="12" rx="10" ry="10" fill="#50C3F7" />
                <ellipse cx="9" cy="13" rx="1.2" ry="1.5" fill="#fff" />
                <ellipse cx="15" cy="13" rx="1.2" ry="1.5" fill="#fff" />
              </svg>
              <span className="sr-only">QQ</span>
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="rounded-full w-10 h-10 dark:border-slate-700 dark:bg-slate-800"
            >
              <svg width="20" height="20" fill="none" viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="10" fill="#222" />
                <path
                  d="M9.5 17c-2.5.5-2.5-1.5-3.5-2m7 2v-1.5c0-.5 0-1-.5-1.5 1.5-.2 3-1 3-3.5 0-.8-.3-1.5-.8-2 .1-.2.3-1-.1-2 0 0-.6-.2-2 .8-.6-.2-1.2-.3-1.8-.3s-1.2.1-1.8.3c-1.4-1-2-.8-2-.8-.4 1-.2 1.8-.1 2-.5.5-.8 1.2-.8 2 0 2.5 1.5 3.3 3 3.5-.4.4-.5 1-.5 1.5V17"
                  stroke="#fff"
                  strokeWidth="1.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span className="sr-only">GitHub</span>
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="rounded-full w-10 h-10 dark:border-slate-700 dark:bg-slate-800"
            >
              <svg width="20" height="20" fill="none" viewBox="0 0 24 24">
                <rect
                  x="3"
                  y="6"
                  width="18"
                  height="12"
                  rx="2"
                  fill="#EA4335"
                />
                <path d="M3 6l9 7 9-7" stroke="#fff" strokeWidth="1.2" />
              </svg>
              <span className="sr-only">Gmail</span>
            </Button>
          </div>
        </CardContent>

        <CardFooter className="flex justify-center">
          <span className="text-sm text-muted-foreground dark:text-slate-400">
            没有账户？
          </span>
          <Button variant="link" className="pl-1 h-auto dark:text-blue-400">
            创建账户
          </Button>
        </CardFooter>
      </section>
    </div>
  )
}
