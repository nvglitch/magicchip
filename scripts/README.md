# 快速开始 - AI 自动翻译

## 最简单的使用方法

### 方法 1: 使用 npm 命令（推荐）

```bash
# 交互式翻译（会提示输入配置）
npm run translate

# 快速翻译（直接提供参数）
npm run translate:quick <base-url> <api-key> <model>
```

### 方法 2: 直接运行脚本

```bash
# 快速翻译
node scripts/quick-translate.js https://api.openai.com/v1 sk-xxx gpt-4
```

## 常用 API 配置

### OpenAI (推荐)
```bash
npm run translate:quick https://api.openai.com/v1 sk-YOUR_KEY gpt-4
```

### DeepSeek (性价比高)
```bash
npm run translate:quick https://api.deepseek.com/v1 sk-YOUR_KEY deepseek-chat
```

### 本地 Ollama (免费)
```bash
npm run translate:quick http://localhost:11434/v1 ollama qwen2.5:72b
```

## 翻译什么？

脚本会自动翻译：
- ✅ 导航菜单
- ✅ 页面标题和描述
- ✅ 按钮和表单文本
- ✅ 产品和服务描述
- ✅ 页脚内容

翻译到：
- 🇫🇷 法语 (French)
- 🇩🇪 德语 (German)
- 🇮🇹 意大利语 (Italian)
- 🇪🇸 西班牙语 (Spanish)

## 预计时间和成本

- ⏱️ 时间: 2-5 分钟
- 💰 成本:
  - GPT-4: ~$2-4
  - GPT-3.5: ~$0.20-0.40
  - 本地模型: 免费

## 完成后

```bash
# 1. 测试构建
npm run build

# 2. 启动开发服务器
npm run dev

# 3. 在浏览器中测试语言切换
```

## 需要帮助？

查看详细文档: [TRANSLATION_GUIDE.md](./TRANSLATION_GUIDE.md)
