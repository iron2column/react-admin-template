import {
  SidebarContent,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubItem,
  SidebarMenuSubButton,
} from '@/components/ui/sidebar'
import { NavLink, useLocation } from 'react-router-dom'
import { menu, type MenuItem, type MenuGroup } from '@/config/menu'
import { resolveIcon } from '@/lib/resolveIcon'
import { useMemo, useState } from 'react'
import { Menu, ChevronDown, ChevronRight } from 'lucide-react'
import { usePermissionsCheck } from '@/hooks/use-permissions-check'

/**
 * 所有菜单
 */
function SidebarAllMenus() {
  return menu.map((group: MenuGroup, groupIndex: number) => {
    return (
      <SidebarGroup key={`group-${groupIndex}-${group.groupLabel}`}>
        {/* 组标签 */}
        <SidebarGroupLabel>{group.groupLabel}</SidebarGroupLabel>
        {/* 组内容 */}
        <SidebarGroupContent>
          {/* 菜单项 */}
          <SidebarMenuItems items={group.items} />
        </SidebarGroupContent>
      </SidebarGroup>
    )
  })
}

/**
 * 菜单项
 * @param items 菜单项
 */
function SidebarMenuItems({ items }: { items: MenuItem[] }) {
  return (
    <SidebarMenu>
      {items.map((item, index) => (
        <MenuItemWithChildren key={`${item.path}-${index}`} menuItem={item} />
      ))}
    </SidebarMenu>
  )
}

/**
 * 带子菜单的菜单项
 */
function MenuItemWithChildren({ menuItem }: { menuItem: MenuItem }) {
  const location = useLocation()
  // 权限判断
  const hasPermissions = usePermissionsCheck(menuItem.permissions)
  // 是否隐藏
  const isHidden = menuItem.hidden || false
  // 子菜单
  const children = menuItem.children || []
  const hasChildren = children.length > 0
  // 是否激活（当前路由匹配此菜单或其子菜单）
  const isActive = isPathMatchMenuItem(location.pathname, menuItem)
  // 子菜单展开状态 - 默认展开激活的菜单
  const [isOpen, setIsOpen] = useState(isActive)
  // 图标
  const icon = useMemo(
    () =>
      menuItem.icon ? resolveIcon(menuItem.icon) : <Menu className="w-4 h-4" />,
    [menuItem.icon]
  )

  // 如果无权限或设置为隐藏，则不渲染
  if (!hasPermissions && menuItem.permissions) return null
  if (isHidden) return null

  const hasChildrenRender = (
    <>
      {/* 带子菜单的菜单项 */}
      <SidebarMenuButton
        isActive={isActive}
        onClick={() => setIsOpen(!isOpen)}
        className="justify-between cursor-pointer"
      >
        <div className="flex items-center gap-2">
          {icon}
          <span>{menuItem.title}</span>
        </div>
        <ChevronRight className={`h-4 w-4 transition-transform ${isOpen ? 'rotate-90' : ''}`} />
      </SidebarMenuButton>

      {/* 子菜单 */}
      {isOpen && (
        <SidebarMenuSub>
          {children.map((child, childIndex) => (
            <SidebarMenuSubItem key={`${child.path}-${childIndex}`}>
              <SubMenuItem menuItem={child} />
            </SidebarMenuSubItem>
          ))}
        </SidebarMenuSub>
      )}
    </>
  )

  const noChildrenRender = (
    /* 无子菜单的菜单项 */
    <SidebarMenuButton asChild isActive={isActive}>
      <NavLink to={menuItem.path}>
        {icon}
        <span>{menuItem.title}</span>
      </NavLink>
    </SidebarMenuButton>
  )

  return (
    <SidebarMenuItem>
      {hasChildren ? hasChildrenRender : noChildrenRender}
    </SidebarMenuItem>
  )
}

/**
 * 子菜单项组件
 */
function SubMenuItem({ menuItem }: { menuItem: MenuItem }) {
  const location = useLocation()
  const { path, title, permissions, hidden = false } = menuItem
  const children = menuItem.children || []

  // 权限判断
  const hasPermissions = usePermissionsCheck(permissions)

  // 是否有孙菜单
  const hasChildren = children.length > 0

  // 是否激活
  const isActive = isPathMatchMenuItem(location.pathname, menuItem)

  // 子菜单展开状态
  const [isOpen, setIsOpen] = useState(isActive)

  // 图标
  const icon = useMemo(
    () => (menuItem.icon ? resolveIcon(menuItem.icon) : <Menu className="w-4 h-4" />),
    [menuItem.icon]
  )

  // 如果无权限或设置为隐藏，则不渲染
  if (!hasPermissions && permissions) return null
  if (hidden) return null

  // 有孙菜单的子菜单项
  if (hasChildren) {
    return (
      <>
        <SidebarMenuSubButton
          isActive={isActive}
          onClick={() => setIsOpen(!isOpen)}
          className="justify-between"
        >
          <div className="flex items-center gap-2">
            {icon}
            <span>{title}</span>
          </div>
          {isOpen ? (
            <ChevronDown className="h-3 w-3" />
          ) : (
            <ChevronRight className="h-3 w-3" />
          )}
        </SidebarMenuSubButton>

        {/* 递归渲染孙菜单 */}
        {isOpen && (
          <div className="ml-2 border-l border-sidebar-border pl-2 mt-1">
            {children.map((child, index) => (
              <SidebarMenuSubItem key={`${child.path}-${index}`}>
                <SubMenuItem menuItem={child} />
              </SidebarMenuSubItem>
            ))}
          </div>
        )}
      </>
    )
  }

  // 无孙菜单的子菜单项
  return (
    <SidebarMenuSubButton asChild isActive={isActive}>
      <NavLink to={path}>
        {icon}
        <span>{title}</span>
      </NavLink>
    </SidebarMenuSubButton>
  )
}

/**
 * 检查当前路径是否匹配菜单项或其子项
 */
function isPathMatchMenuItem(pathname: string, menuItem: MenuItem): boolean {
  if (pathname === menuItem.path) return true

  if (menuItem.children && menuItem.children.length > 0) {
    return menuItem.children.some((child) =>
      isPathMatchMenuItem(pathname, child)
    )
  }

  return false
}

export default function AppSidebarContent() {
  return (
    <SidebarContent>
      <SidebarAllMenus />
    </SidebarContent>
  )
}
