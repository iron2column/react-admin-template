import {
  SidebarContent,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
} from '@/components/ui/sidebar'
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '@/components/ui/collapsible'
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from '@/components/ui/tooltip'
import { NavLink, useLocation } from 'react-router-dom'
import { menu, type MenuItem, type MenuGroup } from '@/config/menu'
import { resolveIcon } from '@/lib/resolveIcon'
import { Menu, ChevronRight } from 'lucide-react'
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
 * @param items 菜单项列表
 */
function SidebarMenuItems({ items }: { items: MenuItem[] }) {
  return (
    <SidebarMenu>
      {items.map((item, index) => (
        <HierarchicalMenu key={`${item.path}-${index}`} item={item} />
      ))}
    </SidebarMenu>
  )
}

/**
 * 层级菜单
 * @param item 菜单项
 * @returns
 */
function HierarchicalMenu({ item }: { item: MenuItem }) {
  const location = useLocation()
  const hasChildren = !!(item.children && item.children.length > 0)
  const isActive = isPathMatchMenuItem(location.pathname, item)
  const { path, title, icon } = item
  const hasPermission = usePermissionsCheck(item.permissions)

  // 是否隐藏
  if (item.hidden) return null

  // 是否有权限
  if (item.permissions && !hasPermission) return null

  if (!hasChildren) {
    return (
      <SidebarMenuItem>
        <TooltipWrapper title={title}>
          <SidebarMenuButton asChild isActive={isActive}>
            <NavLink to={path}>
              {/* icon */}
              <MenuIcon icon={icon} />
              {/* title */}
              <p className="truncate">{title}</p>
            </NavLink>
          </SidebarMenuButton>
        </TooltipWrapper>
      </SidebarMenuItem>
    )
  }

  return (
    <Collapsible asChild className="group/collapsible">
      <SidebarMenuItem>
        {/* 折叠触发器 */}
        <TooltipWrapper title={title}>
          <CollapsibleTrigger asChild>
            <SidebarMenuButton>
              {/* icon */}
              <MenuIcon icon={icon} />
              {/* title */}
              <p className="truncate">{title}</p>
              {/* 折叠指示器 */}
              <FoldIcon />
            </SidebarMenuButton>
          </CollapsibleTrigger>
        </TooltipWrapper>

        {/* 折叠内容 */}
        <CollapsibleContent>
          <SidebarMenuSub className="pr-0 mr-0">
            {item.children?.map((child, childIndex) => (
              <HierarchicalMenu
                key={`${child.path}-${childIndex}`}
                item={child}
              />
            ))}
          </SidebarMenuSub>
        </CollapsibleContent>
      </SidebarMenuItem>
    </Collapsible>
  )
}

/**
 * 菜单图标
 * @param icon 图标
 */
function MenuIcon({ icon }: { icon: string | undefined }) {
  return icon ? resolveIcon(icon) : <Menu className="w-4 h-4" />
}

/**
 * 折叠图标
 */
function FoldIcon() {
  return (
    <ChevronRight className="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
  )
}

function TooltipWrapper({
  children,
  title,
}: {
  children: React.ReactNode
  title: string
}) {
  return (
    <Tooltip delayDuration={800}>
      <TooltipTrigger asChild>{children}</TooltipTrigger>
      <TooltipContent side="right">{title}</TooltipContent>
    </Tooltip>
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
