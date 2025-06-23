import { useNavigate } from 'react-router-dom'
import { Button } from '@/components/ui/button'

export default function Error() {
  const navigate = useNavigate()
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-background px-4 text-center">
      <div className="space-y-6 max-w-md">
        {/* 404大数字 */}
        <h1 className="text-9xl font-bold text-primary">502</h1>
        
        {/* 错误信息 */}
        <div className="space-y-2">
          <h2 className="text-2xl font-semibold text-foreground">页面错误</h2>
          <p className="text-muted-foreground">
            抱歉，页面出错了。请联系管理员。
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
