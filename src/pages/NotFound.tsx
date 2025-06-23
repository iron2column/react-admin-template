import { useNavigate } from 'react-router-dom'
import { Button } from '@/components/ui/button'

export default function NotFound() {
  const navigate = useNavigate()
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-background px-4 text-center">
      <div className="space-y-6 max-w-md">
        {/* 404大数字 */}
        <h1 className="text-9xl font-bold text-primary">404</h1>
        
        {/* 错误信息 */}
        <div className="space-y-2">
          <h2 className="text-2xl font-semibold text-foreground">页面未找到</h2>
          <p className="text-muted-foreground">
            抱歉，您访问的页面不存在或已被移除。请返回首页或尝试其他页面。
          </p>
        </div>
        
        {/* 按钮组 */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center pt-4">
          <Button 
            onClick={() => navigate('/')}
            size="lg"
            className="min-w-[140px]"
          >
            返回首页
          </Button>
          <Button 
            onClick={() => navigate(-1)}
            variant="outline"
            size="lg"
            className="min-w-[140px]"
          >
            返回上一页
          </Button>
        </div>
      </div>
    </div>
  )
}
