import { useMemo } from 'react'

// 暂时模拟用户认证
// 在实际项目中，你应该创建真实的认证上下文或从状态管理库获取用户信息
function useAuth() {
  // 模拟用户数据，实际项目中应从真实来源获取
  return {
    user: {
      id: '1',
      name: 'Admin User',
      roles: ['admin'],
      permissions: ['read:users', 'write:users']
    },
    isAuthenticated: true
  }
}

/**
 * 权限检查模式
 */
export type PermissionMode = 'some' | 'every' | 'none'

/**
 * 检查用户是否拥有特定权限
 * @param requiredPermissions 需要检查的权限列表
 * @param mode 权限匹配模式:
 *  - 'some': 用户至少拥有一个所需权限 (默认)
 *  - 'every': 用户必须拥有所有所需权限
 *  - 'none': 用户不拥有任何所需权限
 * @param fallback 如果没有提供权限列表时的默认返回值
 * @returns 用户是否拥有所需权限
 */
export function usePermissionsCheck(
  requiredPermissions?: string[] | string,
  mode: PermissionMode = 'some',
  fallback = false
): boolean {
  // 获取用户信息和权限
  const { user, isAuthenticated } = useAuth()
  
  // 将单个权限字符串转换为数组
  const normalizedPermissions = useMemo(() => {
    if (!requiredPermissions) return []
    return typeof requiredPermissions === 'string' 
      ? [requiredPermissions] 
      : requiredPermissions
  }, [requiredPermissions])
  
  // 如果没有提供权限要求，返回默认值
  if (!normalizedPermissions.length) return fallback
  
  // 如果用户未认证，没有任何权限
  if (!isAuthenticated || !user) return false
  
  // 获取用户权限列表
  const userPermissions = user.permissions || []
  const userRoles = user.roles || []
  
  // 合并角色和权限进行检查
  const userAbilities = [...userPermissions, ...userRoles]
  
  // 根据不同模式检查权限
  switch (mode) {
    case 'some':
      // 至少有一个权限匹配
      return normalizedPermissions.some(permission => 
        userAbilities.includes(permission))
    
    case 'every':
      // 所有权限都匹配
      return normalizedPermissions.every(permission => 
        userAbilities.includes(permission))
    
    case 'none':
      // 没有任何权限匹配
      return !normalizedPermissions.some(permission => 
        userAbilities.includes(permission))
    
    default:
      return fallback
  }
}