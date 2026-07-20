# MagicChip B2B Website

MagicChip 企业硬件产品展示网站，基于 Next.js App Router 构建，覆盖工业迷你电脑、防火墙设备、桌面迷你电脑、机架式防火墙服务器、公司介绍、工厂展示、新闻、技术资料和联系页面。

本文档是项目当前唯一的根目录说明文档。历史实施总结、修复报告和旧版设计方案均已合并或移除；维护时请以代码、`content/` 数据和本 README 为准。

## 技术栈

- Next.js 16.1.6（App Router / Turbopack）
- React 18.3.1
- TypeScript
- Tailwind CSS 4
- Framer Motion
- Lucide React
- React Simple Maps

## 快速开始

```bash
npm install
npm run dev
```

开发服务器启动后访问 `http://localhost:3000`。

常用命令：

```bash
npm run dev                 # 本地开发
npm run build               # 生产构建及 TypeScript 检查
npm run start               # 运行生产构建
npm run lint                # ESLint 检查
npm run translate           # AI 辅助翻译
npm run translate:quick     # 快速翻译
npm run translate:validate  # 翻译完整性检查
```

交付前至少执行：

```bash
npm run build
```

## 页面与路由

| 路由 | 用途 |
| --- | --- |
| `/` | 首页、轮播图、产品分类和联系入口 |
| `/products` | 产品分类总览 |
| `/products/[category]` | 分类产品列表 |
| `/products/[category]/[id]` | 产品详情页 |
| `/factory` | 工厂与生产能力 |
| `/company`、`/about` | 公司信息 |
| `/news`、`/news/[id]` | 新闻列表和详情 |
| `/documents`、`/downloads`、`/tech-docs` | 文档与技术资料 |
| `/contact` | 联系方式与询盘入口 |

当前产品分类 ID：

- `industrial-mini-pc`
- `firewall-mini-pc`
- `desktop-mini-pc`
- `firewall-server`

## 项目结构

```text
app/                         页面与动态路由
components/                  首页和全站复用组件
content/
  banners/                   首页轮播内容
  news/                      新闻 JSON
  products/                  产品分类 JSON
  products/items/            产品条目数据副本
  site-config.json           联系方式、品牌和社交链接
lib/
  content-loader.ts          服务端 JSON 内容读取
  i18n/                      多语言上下文、翻译和 SEO 配置
public/assets/
  brand/                     Logo 与品牌资源
  common/                    二维码和通用图标
  factory/                   工厂页面图片
  home/banners/              首页轮播图
  home/product-categories/   首页产品分类图
  products/                  按类别和型号归档的产品资源
scripts/                     翻译检查与辅助脚本
types/                       TypeScript 补充类型
```

## 内容维护

### 首页轮播

轮播配置位于 `content/banners/*.json`。常用字段：

- `order`：显示顺序
- `image`：`public` 下的绝对资源路径
- `title`、`subtitle`、`ctaText`：多语言文本
- `ctaLink`：按钮链接
- `published`：是否显示

新增轮播时复制现有 JSON，使用唯一 `id`，添加对应图片，然后运行生产构建。

### 新闻

新闻位于 `content/news/*.json`，按日期倒序显示。新增文章时应使用唯一 `id`，填写日期、多语言标题和摘要，并确认图片链接可访问。

### 站点配置

联系方式、公司信息、Logo 和社交链接位于 `content/site-config.json`。修改 JSON 后必须检查语法并重新构建。

### 产品数据

当前产品系统仍处于“JSON 内容 + 页面内展示数据”并存状态：

- 分类首页内容：`content/products/*.json`
- 产品条目副本：`content/products/items/*.json`
- 分类列表实际展示：`app/products/[category]/page.tsx` 中的 `sampleProducts`
- 详情页实际展示：`app/products/[category]/[id]/page.tsx` 中的 `products`

因此新增或修改产品时，需要同步更新分类列表、详情页数据和 `content/products/items/` 中的 JSON。只修改其中一处可能导致列表与详情不一致。

当前详情页支持：

- 主图和可放大图片
- 产品亮点
- 规格矩阵
- 产品优势卡片
- 带说明的方图画廊 `galleryCards`
- 横向卖点图 `sellingPoints`
- 工作温度与询盘 CTA

### 新增产品建议流程

1. 在 `public/assets/products/<category>/<model>/` 建立型号目录。
2. 图片放入 `images/`，手册放入 `documents/`。
3. 文件名优先使用小写英文、数字和连字符，避免空格及中文路径。
4. 阅读产品手册并核对图片内容，不根据文件名猜测规格。
5. 在分类页添加产品卡片。
6. 在详情页添加完整产品数据。
7. 在 `content/products/items/` 添加或更新对应 JSON。
8. 检查所有 `/assets/...` 引用确实存在。
9. 运行 `npm run build`。

## 图片与文档规范

所有网站静态资源统一放在 `public/assets/`，代码中使用以 `/assets/` 开头的路径。

推荐结构：

```text
public/assets/products/<category>/<model>/
  images/
    1.jpg
    detail-interfaces.jpg
    detail-cooling.jpg
  documents/
    brochure.pdf
```

页面排版原则：

- 主图优先使用清晰的方图或产品主体图。
- 方图放在产品画廊中并保持相同尺寸。
- 横图放在产品优势或卖点区域中并保持相同宽高比。
- 图片标题和说明必须与图中接口、功能或应用场景一致。
- 不要直接移动资源而不更新代码引用。
- 资源整理后应全局搜索旧路径，并执行生产构建。

## 产品详情页设计约定

详情页顺序保持一致：

1. 产品 Hero：分类、型号、简介、核心亮点和主图。
2. Product Gallery：同类画幅的产品图，可附标题和说明。
3. Technical Specifications：以手册为依据的规格矩阵。
4. Product Advantages：三项核心能力卡片。
5. Selling Points：同类横向详情图及对应说明。
6. Contact CTA：跳转到询盘页面。

不要在同一行混排明显不同宽高比的图片。图片卡片应完整展示原图，不使用会裁掉文字或接口的强制裁切。

## 多语言

当前界面语言：

- English (`en`，默认)
- Français (`fr`)
- Deutsch (`de`)
- Italiano (`it`)
- Español (`es`)

核心配置位于 `lib/i18n/config.ts`，翻译位于 `lib/i18n/locales/`。新增界面文案时必须同步添加各语言键，至少保证英文回退内容完整。

项目部分内容类型仍保留可选 `zh` 字段，但中文目前不在 `SUPPORTED_LANGUAGES` 中，不应把它当作已启用的前台语言。

## SEO

SEO 配置位于 `lib/i18n/seo-config.ts` 和各语言文件中。维护时应确保：

- 页面标题和描述与当前产品一致。
- Open Graph 图片路径真实存在。
- 图片具有准确的 `alt` 文本。
- 外部链接使用有效地址。
- 新增语言时同步更新语言配置和 SEO 元数据。

## 验证与排错

### 图片不显示

1. 确认文件位于 `public/assets/`。
2. 确认引用以 `/assets/` 开头。
3. 检查大小写、空格、URL 编码和扩展名。
4. 全局搜索旧路径。
5. 运行 `npm run build`。

### JSON 修改后页面无变化

确认页面是否由 `content-loader.ts` 读取。产品分类列表和详情目前主要使用页面文件中的数据，修改产品 JSON 后仍需同步更新对应页面。

### 构建与代码规范

`npm run build` 是当前发布门槛。`npm run lint` 还会报告项目历史代码中的显式 `any`、未使用导入及原生 `<img>` 等问题；这些应逐步修复，但不要用忽略规则掩盖新增错误。

## 开发约定

- 使用 TypeScript，避免新增 `any`。
- 优先复用现有组件、颜色和间距体系。
- 不提交 `.next/`、临时渲染文件或本地环境文件。
- 修改前检查 Git 状态，保留无关的用户改动。
- 修改图片和产品内容后同时检查桌面端与移动端布局。
- 产品参数以最新手册和实物图片为准。

## 当前维护重点

- 逐步将产品列表和详情页数据统一到单一数据源，消除重复维护。
- 修复历史编码异常文本。
- 清理现有 ESLint 错误和警告。
- 持续完善多语言产品文案与 SEO 信息。