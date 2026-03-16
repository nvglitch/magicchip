# MagicChip 网站内容管理系统 (CMS) 使用指南

本指南将帮助您轻松管理网站的所有内容，包括文案、图片、新闻、产品等。

## 📁 目录结构

```
magicchip/
├── content/                    # 所有内容配置文件
│   ├── site-config.json       # 全站配置（联系方式、社交媒体）
│   ├── banners/               # 首页轮播图
│   │   ├── banner-1.json
│   │   ├── banner-2.json
│   │   └── banner-3.json
│   ├── products/              # 产品分类
│   │   ├── processors.json
│   │   ├── ai-accelerators.json
│   │   ├── network-chips.json
│   │   └── security-modules.json
│   └── news/                  # 新闻文章
│       ├── 2026-03-10-ai-accelerator.json
│       ├── 2026-03-05-new-fab.json
│       └── 2026-02-28-partnership.json
└── public/                    # 图片资源
    └── images/
        ├── banners/           # 轮播图图片
        ├── products/          # 产品图片
        └── news/              # 新闻配图
```

---

## 🌐 全站配置

### 文件位置
`content/site-config.json`

### 可修改内容
- **联系方式**：邮箱、电话、WhatsApp、微信二维码
- **社交媒体**：LinkedIn、Twitter、Facebook、YouTube链接
- **公司信息**：公司名称、Logo路径、成立年份

### 示例
```json
{
  "contact": {
    "email": "info@magicchip.com",
    "phone": "+86 123 4567 8900",
    "whatsapp": "+86 123 4567 8900",
    "wechatQR": "/wechat-qr.png"
  },
  "social": {
    "linkedin": "https://linkedin.com/company/magicchip"
  }
}
```

---

## 🎨 首页轮播图管理

### 文件位置
`content/banners/`

### 添加新轮播图
1. 复制现有的 `banner-1.json` 文件
2. 重命名为 `banner-4.json`（按顺序命名）
3. 修改内容：
   - `order`: 显示顺序（数字越小越靠前）
   - `image`: 图片路径（如 `/banner4.jpg`）或 `null`（使用渐变背景）
   - `title`: 标题（支持多语言）
   - `subtitle`: 副标题
   - `ctaText`: 按钮文字
   - `ctaLink`: 按钮链接
   - `published`: 设为 `true` 显示，`false` 隐藏

### 删除轮播图
- 直接删除对应的JSON文件，或
- 将 `published` 设为 `false`

### 替换图片
1. 将新图片放到 `public/` 目录（如 `public/banner4.jpg`）
2. 在JSON文件中设置 `"image": "/banner4.jpg"`

### 示例
```json
{
  "id": "banner-4",
  "order": 4,
  "image": "/banner4.jpg",
  "title": {
    "en": "Your English Title",
    "zh": "您的中文标题"
  },
  "subtitle": {
    "en": "Your English subtitle",
    "zh": "您的中文副标题"
  },
  "ctaText": {
    "en": "Learn More",
    "zh": "了解更多"
  },
  "ctaLink": "/products",
  "published": true
}
```

---

## 📦 产品分类管理

### 文件位置
`content/products/`

### 添加新产品分类
1. 创建新文件，如 `content/products/iot-chips.json`
2. 填写内容：
   - `id`: 唯一标识符（英文，用连字符）
   - `order`: 显示顺序
   - `icon`: 图标名称（可选：`Cpu`, `Zap`, `Server`, `Shield`, `Brain`）
   - `gradient`: 渐变色（如 `from-blue-600 to-blue-800`）
   - `title`: 产品名称（多语言）
   - `description`: 产品描述（多语言）
   - `published`: `true` 显示，`false` 隐藏

### 删除产品分类
- 删除对应的JSON文件，或
- 将 `published` 设为 `false`

### 修改产品顺序
修改 `order` 字段的数字，数字越小越靠前

### 示例
```json
{
  "id": "iot-chips",
  "order": 5,
  "icon": "Cpu",
  "gradient": "from-green-600 to-green-800",
  "title": {
    "en": "IoT Chips",
    "zh": "物联网芯片"
  },
  "description": {
    "en": "Low-power chips for IoT devices",
    "zh": "面向物联网设备的低功耗芯片"
  },
  "published": true
}
```

---

## 📰 新闻文章管理

### 文件位置
`content/news/`

### 添加新文章
1. 创建新文件，命名格式：`YYYY-MM-DD-标题.json`
   - 例如：`2026-03-15-new-product.json`
2. 填写内容：
   - `id`: 唯一标识符
   - `date`: 发布日期（YYYY-MM-DD格式）
   - `category`: 分类（多语言）
   - `title`: 标题（多语言）
   - `excerpt`: 摘要（多语言）
   - `image`: 图片URL或路径
   - `published`: `true` 显示，`false` 隐藏

### 删除文章
- 删除对应的JSON文件，或
- 将 `published` 设为 `false`

### 文章排序
文章自动按 `date` 字段倒序排列（最新的在前）

### 添加配图
1. 将图片放到 `public/images/news/` 目录
2. 在JSON中设置 `"image": "/images/news/your-image.jpg"`

### 示例
```json
{
  "id": "new-product-launch-2026",
  "date": "2026-03-15",
  "category": {
    "en": "Product Launch",
    "zh": "产品发布"
  },
  "title": {
    "en": "MagicChip Launches Revolutionary New Chip",
    "zh": "MagicChip发布革命性新芯片"
  },
  "excerpt": {
    "en": "Our latest chip delivers unprecedented performance...",
    "zh": "我们的最新芯片提供前所未有的性能..."
  },
  "image": "/images/news/new-chip-2026.jpg",
  "published": true
}
```

---

## 🖼️ 图片管理

### 图片存放位置
- **轮播图**：`public/` 根目录或 `public/images/banners/`
- **产品图片**：`public/images/products/`
- **新闻配图**：`public/images/news/`
- **其他图片**：`public/images/`

### 替换图片
1. 将新图片放到对应目录
2. 保持文件名相同，或
3. 修改JSON文件中的图片路径

### 图片命名建议
- 使用英文和连字符：`new-product-2026.jpg`
- 避免空格和特殊字符
- 使用小写字母

### 推荐图片尺寸
- **轮播图**：1920x1080px（16:9比例）
- **新闻配图**：800x400px
- **产品图片**：根据实际需求

---

## 🌍 多语言支持

### 支持的语言
- `en`: 英语
- `zh`: 中文
- `fr`: 法语
- `de`: 德语
- `it`: 意大利语
- `es`: 西班牙语

### 添加翻译
在JSON文件的多语言字段中添加对应语言代码：

```json
{
  "title": {
    "en": "English Title",
    "zh": "中文标题",
    "fr": "Titre Français"
  }
}
```

### 注意事项
- 至少提供英语（`en`）版本
- 如果某语言缺失，系统会自动使用英语版本

---

## ✅ 常见操作速查

### 修改联系方式
编辑 `content/site-config.json`

### 添加轮播图
1. 复制 `content/banners/banner-1.json`
2. 修改内容和 `order` 字段
3. 添加图片到 `public/`

### 添加新闻
1. 创建 `content/news/YYYY-MM-DD-title.json`
2. 填写内容
3. 添加配图到 `public/images/news/`

### 添加产品
1. 创建 `content/products/product-name.json`
2. 填写内容
3. 设置 `order` 和 `published: true`

### 隐藏内容
将任何JSON文件中的 `published` 设为 `false`

### 删除内容
直接删除对应的JSON文件

---

## 🚀 发布更改

### 本地测试
```bash
npm run dev
```
访问 http://localhost:3000 查看效果

### 构建生产版本
```bash
npm run build
npm start
```

### 注意事项
- 修改JSON文件后需要重新构建
- 图片修改可以直接替换，无需重新构建
- 建议使用Git管理所有更改

---

## 🆘 常见问题

### Q: 修改后没有生效？
A: 需要重新运行 `npm run build` 构建项目

### Q: 图片不显示？
A: 检查图片路径是否正确，路径以 `/` 开头表示 `public/` 目录

### Q: 如何调整内容顺序？
A: 修改 `order` 字段，数字越小越靠前

### Q: 可以添加新的语言吗？
A: 可以，在JSON中添加新的语言代码即可

### Q: JSON文件格式错误怎么办？
A: 使用在线JSON验证工具检查格式，确保所有引号、逗号、括号正确

---

## 📞 技术支持

如有问题，请联系技术团队或查看项目文档。

**祝您使用愉快！** 🎉
