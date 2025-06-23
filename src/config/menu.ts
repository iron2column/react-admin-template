/**
 * 菜单组
 */
export interface MenuGroup {
  groupLabel: string
  items: MenuItem[]
}

/**
 * 菜单项
 */
export interface MenuItem {
  title: string
  path: string
  icon?: string
  hidden?: boolean
  children?: MenuItem[]
  permissions?: string[]
}

/**
 * 菜单配置
 */
export const menu: MenuGroup[] = [
  {
    groupLabel: '示例',
    items: [
      {
        title: '仪表盘',
        icon: 'Home',
        path: '/dashboard',
      },
      {
        title: '用户管理',
        icon: 'User',
        path: '/users',
      },
      {
        title: '系统设置',
        icon: 'Settings',
        path: '/settings',
        children: [
          {
            title: '个人资料',
            path: '/settings/profile',
          },
          {
            title: '账户安全',
            path: '/settings/security',
          },
        ],
      }
    ]
  },
  {
    groupLabel: '示例 2',
    items: [
      {
        title: '仪表盘 2',
        icon: 'Home',
        path: '/dashboard2',
        hidden: true,
      },
      {
        title: '仪表盘 3',
        icon: 'Home',
        path: '/dashboard3',
        permissions: ['user', 'admin'],
      },
      {
        title: '仪表盘 4',
        icon: 'Home',
        path: '/dashboard4',
        children: [
          {
            title: '仪表盘 4-1',
            path: '/dashboard4/1',
          },
          {
            title: '仪表盘 4-2',
            path: '/dashboard4/2',
            children: [
              {
                title: '仪表盘 4-2-1',
                path: '/dashboard4/2/1',
              },
              {
                title: '仪表盘 4-2-2',
                path: '/dashboard4/2/2',
              },
            ],
          },
        ],
      },
    ]
  }
]