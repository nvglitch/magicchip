# MagicChip - B2B Brand Showcase Website

<p align="center">
  <img src="/logo.png" alt="MagicChip Logo" width="200" />
</p>

MagicChip 是一家专注于高端硬件产品和企业服务的 B2B 品牌展示官网。本项目采用现代化的技术栈构建，旨在提供极致的品牌视觉展示、流畅的交互体验，以及高质量的销售线索收集。

## 技术栈

| 技术 | 版本 | 说明 |
|------|------|------|
| **Next.js** | 16.1.6 | React 全栈框架 (App Router) |
| **React** | 19.2.3 | UI 库 |
| **TypeScript** | 5.x | 类型安全 |
| **Tailwind CSS** | 4 | 原子化 CSS 框架 |
| **Framer Motion** | 12.x | 动画与交互 |
| **Lucide React** | 0.577.0 | 图标库 |

## 项目特性

### 核心功能
- **Hero Banner** - 支持鼠标拖拽切换幻灯片、播放/暂停控制、平滑过渡动画
- **产品分类** - 展示企业级处理器、AI加速器、网络芯片、安全模块
- **旗舰产品** - MC-Pro X1 系列展示，包含特性列表
- **服务矩阵** - 6大企业服务（咨询、实施、培训、支持等）
- **客户案例** - 客户评价与信任墙，数据统计展示
- **销售线索收集** - 免费资源下载表单

### 交互设计
- 滚动动画 (Scroll-triggered animations)
- 下拉菜单 (悬停展开 + 底部动画下划线)
- 响应式设计 (桌面端 / 平板 / 移动端)
- Logo 跑马灯效果

### 国际化
- 完整的中英文双语支持
- 语言切换持久化 (localStorage)
- 导航栏、页脚、全文内容均已翻译

## 项目结构

```
magicchip/
├── app/                      # Next.js App Router
│   ├── layout.tsx           # 根布局 (含 LanguageProvider)
│   ├── page.tsx             # 首页
│   └── globals.css          # 全局样式
├── components/              # React 组件
│   ├── Navbar.tsx          # 导航栏 (含下拉菜单、语言切换)
│   ├── HeroBanner.tsx      # Hero 幻灯片 (拖拽切换)
│   ├── ProductCategories.tsx  # 产品分类
│   ├── FeaturedProduct.tsx # 旗舰产品展示
│   ├── Services.tsx        # 服务矩阵
│   ├── SocialProof.tsx    # 客户信任墙
│   ├── LeadGeneration.tsx # 线索收集表单
│   └── Footer.tsx          # 页脚
├── lib/i18n/               # 国际化
│   ├── translations.ts     # 翻译字典 (中/英)
│   └── LanguageContext.tsx # 语言上下文
├── public/                 # 静态资源
│   └── logo.png           # 网站 Logo
├── package.json            # 依赖配置
├── tailwind.config.*       # Tailwind 配置
└── next.config.*          # Next.js 配置
```

## 快速开始

### 安装依赖

```bash
npm install
```

### 开发模式

```bash
npm run dev
```

访问 http://localhost:3000

### 构建生产版本

```bash
npm run build
```

### 启动生产服务器

```bash
npm start
```

## 页面结构

1. **Header** - 固定导航栏，含 Logo、4个导航项（带下拉菜单）、搜索、语言切换
2. **Hero Banner** - 3张幻灯片，支持拖拽和自动播放
3. **Product Categories** - 4个产品类别卡片
4. **Featured Product** - MC-Pro X1 旗舰产品展示
5. **Services** - 6项企业服务
6. **Social Proof** - 客户 Logo 跑马灯 + 案例引用
7. **Lead Generation** - 免费资源下载表单
8. **Footer** - 订阅通讯、链接列表、版权信息

## 品牌信息

- **公司名称**: MagicChip
- **定位**: 高端硬件产品 & 企业服务提供商
- **目标客户**: 数据中心、云服务商、AI 企业、 Enterprise 客户

## 开发规范

- 使用 TypeScript 进行类型检查
- 使用 ESLint 进行代码规范检查
- 组件使用 Framer Motion 处理动画
- 使用 Tailwind CSS 进行样式开发
- 所有文本内容通过 i18n 系统管理

## 许可证

MIT License
