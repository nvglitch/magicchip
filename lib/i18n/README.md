# 多语言系统架构

## 概述

本项目已升级为成熟的多语言架构，支持以下五种语言：
- 🇬🇧 English (en)
- 🇫🇷 Français (fr)
- 🇩🇪 Deutsch (de)
- 🇮🇹 Italiano (it)
- 🇪🇸 Español (es)

## 架构特点

### 1. 模块化设计
- **类型安全**: 使用 TypeScript 确保所有翻译键的类型安全
- **懒加载**: 非英语语言按需加载，减少初始包大小
- **可扩展**: 易于添加新语言

### 2. 文件结构
```
lib/i18n/
├── config.ts              # 语言配置和工具函数
├── types.ts               # 翻译结构类型定义
├── LanguageContext.tsx    # React Context 和 Provider
├── index.ts               # 导出接口
└── locales/               # 各语言翻译文件
    ├── en.ts              # 英语（已完成）
    ├── fr.ts              # 法语（待翻译）
    ├── de.ts              # 德语（待翻译）
    ├── it.ts              # 意大利语（待翻译）
    └── es.ts              # 西班牙语（待翻译）
```

### 3. 核心功能

#### 自动语言检测
系统会自动检测用户浏览器语言，如果支持则自动切换。

#### 持久化存储
用户选择的语言会保存在 localStorage 中，下次访问时自动恢复。

#### SEO 优化
- 自动更新 HTML `lang` 属性
- 支持搜索引擎索引不同语言版本

#### 性能优化
- 英语作为默认语言，立即可用
- 其他语言按需异步加载
- 使用 React Context 避免 prop drilling

## 使用方法

### 在组件中使用
```typescript
import { useLanguage } from '@/lib/i18n/LanguageContext';

function MyComponent() {
  const { t, language, setLanguage, isLoading } = useLanguage();

  return (
    <div>
      <h1>{t.nav.home}</h1>
      <p>{t.hero.slide1.title}</p>
    </div>
  );
}
```

### 切换语言
```typescript
const { setLanguage } = useLanguage();

// 切换到法语
setLanguage('fr');
```

### 获取当前语言
```typescript
const { language } = useLanguage();
console.log(language); // 'en', 'fr', 'de', 'it', or 'es'
```

## 添加新翻译

### 步骤 1: 复制英文模板
```bash
cp lib/i18n/locales/en.ts lib/i18n/locales/[new-lang].ts
```

### 步骤 2: 更新导出名称
将 `export const en` 改为 `export const [new-lang]`

### 步骤 3: 翻译内容
翻译所有字符串值，保持键名不变

### 步骤 4: 更新配置
在 `config.ts` 中添加新语言到 `SUPPORTED_LANGUAGES` 和 `LANGUAGE_NAMES`

### 步骤 5: 更新 Context
在 `LanguageContext.tsx` 的 `loadTranslation` 函数中添加新语言的 case

## 翻译指南

### 当前状态
- ✅ **English (en)**: 100% 完成
- ⏳ **Français (fr)**: 使用英文占位，需要翻译
- ⏳ **Deutsch (de)**: 使用英文占位，需要翻译
- ⏳ **Italiano (it)**: 使用英文占位，需要翻译
- ⏳ **Español (es)**: 使用英文占位，需要翻译

### 翻译注意事项
1. 保持专业术语的一致性
2. 注意文化差异和本地化
3. 保持字符串长度合理，避免 UI 溢出
4. 使用正确的标点符号和格式
5. 保留 HTML 标签和变量占位符

### 优先级
1. 导航和菜单（nav, navDropdown）
2. 首页内容（hero, products, featured）
3. 服务和社交证明（services, social）
4. 表单和页脚（lead, footer）

## 测试

### 手动测试
1. 打开网站
2. 点击语言选择器
3. 选择不同语言
4. 验证所有文本是否正确显示
5. 刷新页面，确认语言设置被保存

### 自动化测试建议
```typescript
// 测试语言切换
test('should switch language', async () => {
  const { setLanguage } = useLanguage();
  await setLanguage('fr');
  expect(localStorage.getItem('magicchip-language')).toBe('fr');
});

// 测试翻译加载
test('should load translations', async () => {
  const { t, setLanguage } = useLanguage();
  await setLanguage('de');
  expect(t.nav.home).toBeDefined();
});
```

## 性能指标

- **初始加载**: 仅加载英文翻译（~15KB）
- **语言切换**: 异步加载目标语言（~15KB per language）
- **缓存**: 已加载的语言保存在内存中
- **包大小影响**: 每个语言文件约 15KB gzipped

## 未来改进

1. **服务端渲染 (SSR)**: 根据请求头自动选择语言
2. **URL 路由**: 支持 `/en/`, `/fr/` 等 URL 结构
3. **翻译管理**: 集成 Crowdin 或 Lokalise 等翻译平台
4. **A/B 测试**: 测试不同翻译版本的转化率
5. **RTL 支持**: 为阿拉伯语等 RTL 语言做准备

## 故障排除

### 问题: 语言切换后页面没有更新
**解决**: 确保组件使用 `useLanguage()` hook 而不是直接导入翻译

### 问题: 翻译文件加载失败
**解决**: 检查 `LanguageContext.tsx` 中的动态导入路径是否正确

### 问题: TypeScript 类型错误
**解决**: 确保所有翻译文件都实现了 `TranslationSchema` 接口

## 贡献

欢迎贡献翻译！请遵循以下步骤：
1. Fork 项目
2. 创建翻译分支
3. 完成翻译并测试
4. 提交 Pull Request

## 许可

与主项目相同
