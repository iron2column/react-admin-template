# React Admin Template

## 项目概括
本项目是一个基于Vite+React+Shadcn UI的现代化后台管理系统模板。采用Typescript开发，集成Tailwind CSS用于样式管理，并利用其preflight功能进行样式重置。此模板旨在为开发者提供一个快速开始管理后台项目的基础框架，可自由定制和扩展。

## 技术选型
- **框架与构建**: 
  - Vite - 现代前端构建工具
  - React 18 - UI库
  - TypeScript - 类型系统
- **UI组件**:
  - Shadcn UI - 基于Radix UI和Tailwind的组件集合
  - Tailwind CSS - 原子化CSS框架（使用preflight作为CSS重置）
  - Lucide React - 图标库
- **状态管理与路由**:
  - React Router - 客户端路由
  - React Query - 服务端状态管理
  - Zustand/Jotai - 客户端状态管理（可选）
- **工具库**:
  - Zod - 数据验证
  - React Hook Form - 表单处理
  - Axios - HTTP请求客户端
- **开发工具**:
  - ESLint - 代码质量
  - Prettier - 代码格式化
  - Husky - Git钩子
  - Vitest - 单元测试
  - Storybook - 组件文档（可选）

## 项目结构
```
/react-admin-template/
├── public/                  # 静态资源
├── src/
│   ├── assets/              # 项目资源文件（图片、字体等）
│   ├── components/          # 可复用组件
│   │   ├── ui/              # Shadcn UI组件
│   │   └── common/          # 自定义通用组件
│   ├── features/            # 功能模块（按业务功能划分）
│   │   ├── auth/            # 认证相关
│   │   ├── dashboard/       # 仪表盘
│   │   └── users/           # 用户管理
│   ├── hooks/               # 自定义Hooks
│   ├── layouts/             # 布局组件
│   ├── lib/                 # 工具函数和服务
│   ├── providers/           # 全局providers
│   ├── routes/              # 路由配置
│   ├── services/            # API服务层
│   ├── store/               # 状态管理
│   ├── styles/              # 全局样式
│   ├── types/               # 类型定义
│   ├── utils/               # 通用工具函数
│   ├── App.tsx              # 应用入口组件
│   ├── main.tsx             # 主入口文件
│   └── vite-env.d.ts        # Vite类型声明
├── .eslintrc.js             # ESLint配置
├── .gitignore               # Git忽略配置
├── .prettierrc              # Prettier配置
├── index.html               # HTML入口
├── package.json             # 项目依赖与脚本
├── postcss.config.js        # PostCSS配置
├── tailwind.config.js       # Tailwind配置
├── tsconfig.json            # TypeScript配置
├── vite.config.ts           # Vite配置
└── README.md                # 项目文档
```

## 核心功能模块
- **布局系统**：
  - 响应式侧边栏
  - 自适应头部
  - 面包屑导航
  - 多级菜单
  - 深色/浅色模式切换
- **认证系统**：
  - 登录/注册页面
  - 权限控制HOC/Hook
  - 用户配置文件
- **通用组件**：
  - 数据表格（排序、筛选、分页）
  - 表单控件集
  - 模态框和抽屉
  - 通知与警报系统
  - 卡片和信息展示组件
- **示例页面**：
  - 仪表盘
  - 用户管理CRUD
  - 设置页面
  - 个人资料页

## 技术实现细节
[本部分将在开发过程中逐步填充各模块的技术实现方案、设计思路等]

## 开发状态跟踪
| 模块/功能      | 状态   | 负责人 | 计划完成日期 | 实际完成日期 | 备注与链接 |
|----------------|--------|--------|--------------|--------------|------------|
| 项目初始化     | 未开始 | AI     | -            |              |            |
| 基础布局组件   | 未开始 | AI     | -            |              |            |
| 认证系统       | 未开始 | AI     | -            |              |            |
| 路由系统       | 未开始 | AI     | -            |              |            |
| UI组件库集成   | 未开始 | AI     | -            |              |            |
| 主题切换       | 未开始 | AI     | -            |              |            |
| 示例页面       | 未开始 | AI     | -            |              |            |

## 开始使用

### 安装
```bash
# 克隆仓库
git clone https://github.com/yourusername/react-admin-template.git

# 进入项目目录
cd react-admin-template

# 安装依赖
npm install
# 或
yarn install
# 或
pnpm install
```

### 开发
```bash
# 启动开发服务器
npm run dev
# 或
yarn dev
# 或
pnpm dev
```

### 构建
```bash
# 构建生产版本
npm run build
# 或
yarn build
# 或
pnpm build
```

## 贡献指南
我们欢迎并感谢任何形式的贡献。如果您想为此项目做出贡献，请参阅[贡献指南](CONTRIBUTING.md)。

## 开源协议
本项目采用 [MIT 许可证](LICENSE)。

## 致谢
- [Vite](https://vitejs.dev/)
- [React](https://reactjs.org/)
- [Shadcn UI](https://ui.shadcn.com/)
- [Tailwind CSS](https://tailwindcss.com/)
- 所有贡献者和使用者

